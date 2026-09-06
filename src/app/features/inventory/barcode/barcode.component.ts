import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { CommonModule } from '@angular/common'; // <-- Ajoute ceci
import { SidebarService } from '../../../core/core.index';
import { ActivatedRoute } from '@angular/router';
interface DataOption {
  value: string;
}

@Component({
  selector: 'app-barcode',
  standalone: true,
  imports: [FormsModule, MatSelectModule, NgxBarcode6Module, CommonModule],
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss']
})
export class BarcodeComponent {
  // Sélection Type / Département
  selectedValue1: string = '';
  selectedValue2: string = '';
  searchDataValue: string = ''; // code existant

  generatedCode: string = ''; // Code final affiché

  // Compteur pour combinaison Type + Département
  counters: Record<string, number> = {};

  selectedList1: DataOption[] = [
    { value: 'MMB' },
    { value: 'MMA' },
    { value: 'AAD' },
    { value: 'EEF' }
  ];

  selectedList2: DataOption[] = [
    { value: 'DAF' },
    { value: 'CP' },
    { value: 'RH' }
  ];


  constructor(private sidebar: SidebarService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérer le paramètre code depuis l'URL
    this.route.paramMap.subscribe(params => {
      const code = params.get('code');
      if (code) {
        this.generatedCode = code;
        this.searchDataValue = code;
      }
    });
  }


  /** Générer le code barre */
  generateBarcode() {
    if (this.searchDataValue) {
      this.generatedCode = this.searchDataValue;
      return;
    }

    if (!this.selectedValue1 || !this.selectedValue2) {
      alert("Veuillez sélectionner Type et Département");
      return;
    }

    const key = `${this.selectedValue1}-${this.selectedValue2}`;
    this.counters[key] = (this.counters[key] || 0) + 1;

    const counterPadded = this.counters[key].toString().padStart(5, '0');
    this.generatedCode = `${this.selectedValue1}${this.selectedValue2}${counterPadded}`;
  }

  /** Saisie d’un code existant */
  searchData(value: string) {
    this.searchDataValue = value;
    if (value && value.trim().length > 0) {
      this.generatedCode = value;
    }
  }
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }

  printBarcode() {
    this.generateBarcode()
    if (!this.generatedCode) return;

    // Sélectionner le contenu du code-barres
    const barcodeElement = document.querySelector('.barcode-preview-card') as HTMLElement;
    if (!barcodeElement) return;

    // Créer une nouvelle fenêtre pour l’impression
    const printWindow = window.open('', '_blank', 'width=400,height=300');
    if (!printWindow) return;

    printWindow.document.write(`
    <html>
      <head>
        <title>Impression code-barres</title>
        <style>
          body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
          .barcode-preview-card { border: 2px solid #333; padding: 20px; border-radius: 8px; text-align: center; }
        </style>
      </head>
      <body>
        ${barcodeElement.innerHTML}
      </body>
    </html>
  `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();

    const existing = localStorage.getItem('qrCodes');
    let list: Array<{ barcode: string, printDate: string }> = [];

    if (existing) {
      try {
        list = JSON.parse(existing);
      } catch (e) {
        list = [];
      }
    }

    list.push({
      barcode: this.generatedCode,
      printDate: new Date().toISOString()
    });

    localStorage.setItem('qrCodes', JSON.stringify(list));
  }


}
