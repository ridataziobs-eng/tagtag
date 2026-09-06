import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/index',
    pathMatch: 'full'
  },
   //Error
   { path: 'error', loadComponent: () => import('./error/error.component').then((m) => m.ErrorComponent,),
    children: [
      { path: '', redirectTo: 'error-404', pathMatch: 'full' },
      { path: 'error-404', loadComponent: () => import('./error/error-404/error-404.component').then(m => m.Error404Component) },
      { path: 'error-500', loadComponent: () => import('./error/error-500/error-500.component').then(m => m.Error500Component) },  
    ],
  },
  {
  path: '',
  loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent),
  children: [
    { path: 'email-verification', loadComponent: () => import('./auth/email-verification/email-verification/email-verification.component').then(m => m.EmailVerificationComponent) },
    { path: 'email-verification-2', loadComponent: () => import('./auth/email-verification/email-verification-2/email-verification-2.component').then(m => m.EmailVerification2Component) },
    { path: 'email-verification-3', loadComponent: () => import('./auth/email-verification/email-verification-3/email-verification-3.component').then(m => m.EmailVerification3Component) },
    { path: 'reset-password-2', loadComponent: () => import('./auth/reset-password/reset-password-2/reset-password-2.component').then(m => m.ResetPassword2Component) },
    { path: 'reset-password-3', loadComponent: () => import('./auth/reset-password/reset-password-3/reset-password-3.component').then(m => m.ResetPassword3Component) },
    { path: 'reset-password', loadComponent: () => import('./auth/reset-password/reset-password/reset-password.component').then(m => m.ResetPasswordComponent) },
    { path: 'forgot-password', loadComponent: () => import('./auth/forgot-password/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent) },
    { path: 'forgot-password-2', loadComponent: () => import('./auth/forgot-password/forgot-password-2/forgot-password-2.component').then(m => m.ForgotPassword2Component) },
    { path: 'forgot-password-3', loadComponent: () => import('./auth/forgot-password/forgot-password-3/forgot-password-3.component').then(m => m.ForgotPassword3Component) },
    { path: 'register', loadComponent: () => import('./auth/register/register/register.component').then(m => m.RegisterComponent) },
    { path: 'register-2', loadComponent: () => import('./auth/register/register-2/register-2.component').then(m => m.Register2Component) },
    { path: 'register-3', loadComponent: () => import('./auth/register/register-3/register-3.component').then(m => m.Register3Component) },
    { path: 'signin', loadComponent: () => import('./auth/signin/signin/signin.component').then(m => m.SigninComponent) },
    { path: 'signin-2', loadComponent: () => import('./auth/signin/signin-2/signin-2.component').then(m => m.Signin2Component) },
    { path: 'signin-3', loadComponent: () => import('./auth/signin/signin-3/signin-3.component').then(m => m.Signin3Component) },
    { path: 'two-step-verification', loadComponent: () => import('./auth/two-step-verification/two-step-verification/two-step-verification.component').then(m => m.TwoStepVerificationComponent) },
    { path: 'two-step-verification-2', loadComponent: () => import('./auth/two-step-verification/two-step-verification-2/two-step-verification-2.component').then(m => m.TwoStepVerification2Component) },
    { path: 'two-step-verification-3', loadComponent: () => import('./auth/two-step-verification/two-step-verification-3/two-step-verification-3.component').then(m => m.TwoStepVerification3Component) },
    { path: 'lock-screen', loadComponent: () => import('./auth/lock-screen/lock-screen.component').then(m => m.LockScreenComponent) },
    { path: 'success', loadComponent: () => import('./auth/successs/success/success.component').then(m => m.SuccessComponent) },
    { path: 'success-2', loadComponent: () => import('./auth/successs/success-2/success-2.component').then(m => m.Success2Component) },
    { path: 'success-3', loadComponent: () => import('./auth/successs/success-3/success-3.component').then(m => m.Success3Component) }
  ]
  },
  //Fetures
  {path : '',loadComponent :() => import('./features/features.component').then((m) => m.FeaturesComponent),
        children: [
      
          { path: 'dashboard', loadComponent: () => import('./features/dashboards/dashboard.component').then(m => m.DashboardComponent),
            children:[
              { path: 'index', loadComponent: () => import('./features/dashboards/admin-dashboard-1/admin-dashboard-1.component').then(m => m.AdminDashboard1Component) },
              { path: 'admin-dashboard', loadComponent: () => import('./features/dashboards/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent) },
              { path: 'sales-dashboard', loadComponent: () => import('./features/dashboards/sales-dashboard/sales-dashboard.component').then(m => m.SalesDashboardComponent) },
            ]
           },
           { path: 'layout-horizontal', loadComponent: () => import('./features/dashboards/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
           { path: 'layout-rtl', loadComponent: () => import('./features/dashboards/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
           { path: 'layout-detached', loadComponent: () => import('./features/dashboards/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
           { path: 'layout-two-column', loadComponent: () => import('./features/dashboards/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
           { path: 'layout-boxed', loadComponent: () => import('./features/dashboards/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
           { path: 'layout-dark', loadComponent: () => import('./features/dashboards/modal-dashboard/modal-dashboard.component').then(m => m.ModalDashboardComponent) },
          { path: 'application',
            loadComponent: () => import('./features/application/application.component').then(m => m.ApplicationComponent),
            children: [
              { path: 'chat', loadComponent: () => import('./features/application/chat/chat.component').then(m => m.ChatComponent) },
              { path: 'calendar', loadComponent: () => import('./features/application/calendar/calendar.component').then(m => m.CalendarComponent) },
              { path: 'email', loadComponent: () => import('./features/application/email/email.component').then(m => m.EmailComponent) },
              { path: 'call-history', loadComponent: () => import('./features/application/call/call-history/call-history.component').then(m => m.CallHistoryComponent) },
              { path: 'file-archived', loadComponent: () => import('./features/application/file/file-archived/file-archived.component').then(m => m.FileArchivedComponent) },
              { path: 'file-document', loadComponent: () => import('./features/application/file/file-document/file-document.component').then(m => m.FileDocumentComponent) },
              { path: 'file-favourites', loadComponent: () => import('./features/application/file/file-favourites/file-favourites.component').then(m => m.FileFavouritesComponent) },
              { path: 'file-manager', loadComponent: () => import('./features/application/file/file-manager/file-manager.component').then(m => m.FileManagerComponent) },
              { path: 'file-manager-deleted', loadComponent: () => import('./features/application/file/file-manager-deleted/file-manager-deleted.component').then(m => m.FileManagerDeletedComponent) },
              { path: 'file-recent', loadComponent: () => import('./features/application/file/file-recent/file-recent.component').then(m => m.FileRecentComponent) },
              { path: 'file-shared', loadComponent: () => import('./features/application/file/file-shared/file-shared.component').then(m => m.FileSharedComponent) },
              { path: 'audio-call', loadComponent: () => import('./features/application/call/audio-call/audio-call.component').then(m => m.AudioCallComponent) },
              { path: 'video-call', loadComponent: () => import('./features/application/call/video-call/video-call.component').then(m => m.VideoCallComponent) },
              { path: 'todo', loadComponent: () => import('./features/application/todo/todo.component').then(m => m.TodoComponent) },
              { path: 'notes', loadComponent: () => import('./features/application/notes/notes.component').then(m => m.NotesComponent) },
              { path: 'social-feed', loadComponent: () => import('./features/application/social-feed/social-feed.component').then(m => m.SocialFeedComponent) },
              { path: 'kanban', loadComponent: () => import('./features/application/kanban/kanban.component').then(m => m.KanbanComponent) },
              { path: 'projects', loadComponent: () => import('./features/application/kanban-view/kanban-view.component').then(m => m.KanbanViewComponent) },
              { path: 'contacts', loadComponent: () => import('./features/application/contacts/contacts.component').then(m => m.ContactsComponent) },
              { path: 'ecommerce', loadComponent: () => import('./features/application/ecommerce/ecommerce.component').then(m => m.EcommerceComponent),
                  children: [
                    { path: 'products', loadComponent: () => import('./features/application/ecommerce/products/products.component').then(m => m.ProductsComponent) },
                    { path: 'orders', loadComponent: () => import('./features/application/ecommerce/orders/orders.component').then(m => m.OrdersComponent) },
                    { path: 'customers', loadComponent: () => import('./features/application/ecommerce/customers/customers.component').then(m => m.CustomersComponent) },
                    { path: 'cart', loadComponent: () => import('./features/application/ecommerce/cart/cart.component').then(m => m.CartComponent) },
                    { path: 'checkout', loadComponent: () => import('./features/application/ecommerce/checkout/checkout.component').then(m => m.CheckoutComponent) },
                    { path: 'wishlist', loadComponent: () => import('./features/application/ecommerce/wishlist/wishlist.component').then(m => m.WishlistComponent) },
                    { path: 'reviews', loadComponent: () => import('./features/application/ecommerce/reviews/reviews.component').then(m => m.ReviewsComponent) }
                  ]
               },
              { path: 'todo-list', loadComponent: () => import('./features/application/todo-list/todo-list.component').then(m => m.TodoListComponent) },
              { path: 'search-list', loadComponent: () => import('./features/application/search-list/search-list.component').then(m => m.SearchListComponent) }
            ]
          },
          { path: 'super-admin',
            loadComponent: () => import('./features/super-admin/super-admin.component').then(m => m.SuperAdminComponent),
            children: [
              { path: 'dashboard', loadComponent: () => import('./features/super-admin/dashboard/dashboard.component').then(m => m.DashboardComponent) },
              { path: 'companies', loadComponent: () => import('./features/super-admin/companies/companies.component').then(m => m.CompaniesComponent) },
              { path: 'subscriptions', loadComponent: () => import('./features/super-admin/subscriptions/subscriptions.component').then(m => m.SubscriptionsComponent) },
              { path: 'packages', loadComponent: () => import('./features/super-admin/packages/packages.component').then(m => m.PackagesComponent) },
              { path: 'domain', loadComponent: () => import('./features/super-admin/domain/domain.component').then(m => m.DomainComponent) },
              { path: 'purchase-transaction', loadComponent: () => import('./features/super-admin/purchase-transaction/purchase-transaction.component').then(m => m.PurchaseTransactionComponent) }
            ]
          },          
          //ui interface
          { path: 'advanced-ui',
            loadComponent: () => import('./features/ui-interface/advanced-ui/advanced-ui.component').then(m => m.AdvancedUiComponent),
            children: [
              { path: 'ui-timeline', loadComponent: () => import('./features/ui-interface/advanced-ui/ui-timeline/ui-timeline.component').then(m => m.UiTimelineComponent) },
              { path: 'ui-text-editor', loadComponent: () => import('./features/ui-interface/advanced-ui/ui-text-editor/ui-text-editor.component').then(m => m.UiTextEditorComponent) },
              { path: 'ui-scrollbar', loadComponent: () => import('./features/ui-interface/advanced-ui/ui-scrollbar/ui-scrollbar.component').then(m => m.UiScrollbarComponent) },
              { path: 'ui-ribbon', loadComponent: () => import('./features/ui-interface/advanced-ui/ui-ribbon/ui-ribbon.component').then(m => m.UiRibbonComponent) },
              { path: 'ui-rating', loadComponent: () => import('./features/ui-interface/advanced-ui/ui-rating/ui-rating.component').then(m => m.UiRatingComponent) },
              { path: 'ui-drag-drop', loadComponent: () => import('./features/ui-interface/advanced-ui/ui-drag-drop/ui-drag-drop.component').then(m => m.UiDragDropComponent) },
              { path: 'ui-counter', loadComponent: () => import('./features/ui-interface/advanced-ui/ui-counter/ui-counter.component').then(m => m.UiCounterComponent) },
              { path: 'ui-clipboard', loadComponent: () => import('./features/ui-interface/advanced-ui/ui-clipboard/ui-clipboard.component').then(m => m.UiClipboardComponent) }
            ]
          },
          { path: 'ui-stickynote', loadComponent: () => import('./features/ui-interface/advanced-ui/ui-stickynote/ui-stickynote.component').then(m => m.UiStickynoteComponent) },
          {  path: 'base-ui',
            loadComponent: () => import('./features/ui-interface/base-ui/base-ui.component').then(m => m.BaseUiComponent),
            children: [
              { path: 'ui-spinner', loadComponent: () => import('./features/ui-interface/base-ui/ui-spinner/ui-spinner.component').then(m => m.UiSpinnerComponent) },
              { path: 'ui-rangeslider', loadComponent: () => import('./features/ui-interface/base-ui/ui-rangeslider/ui-rangeslider.component').then(m => m.UiRangesliderComponent) },
              { path: 'ui-progress', loadComponent: () => import('./features/ui-interface/base-ui/ui-progress/ui-progress.component').then(m => m.UiProgressComponent) },
              { path: 'ui-video', loadComponent: () => import('./features/ui-interface/base-ui/ui-video/ui-video.component').then(m => m.UiVideoComponent) },
              { path: 'ui-typography', loadComponent: () => import('./features/ui-interface/base-ui/ui-typography/ui-typography.component').then(m => m.UiTypographyComponent) },
              { path: 'ui-carousel', loadComponent: () => import('./features/ui-interface/base-ui/ui-carousel/ui-carousel.component').then(m => m.UiCarouselComponent) },
              { path: 'ui-cards', loadComponent: () => import('./features/ui-interface/base-ui/ui-cards/ui-cards.component').then(m => m.UiCardsComponent) },
              { path: 'ui-buttons-group', loadComponent: () => import('./features/ui-interface/base-ui/ui-buttons-group/ui-buttons-group.component').then(m => m.UiButtonsGroupComponent) },
              { path: 'ui-buttons', loadComponent: () => import('./features/ui-interface/base-ui/ui-buttons/ui-buttons.component').then(m => m.UiButtonsComponent) },
              { path: 'ui-breadcrumb', loadComponent: () => import('./features/ui-interface/base-ui/ui-breadcrumb/ui-breadcrumb.component').then(m => m.UiBreadcrumbComponent) },
              { path: 'ui-borders', loadComponent: () => import('./features/ui-interface/base-ui/ui-borders/ui-borders.component').then(m => m.UiBordersComponent) },
              { path: 'ui-badges', loadComponent: () => import('./features/ui-interface/base-ui/ui-badges/ui-badges.component').then(m => m.UiBadgesComponent) },
              { path: 'ui-accordion', loadComponent: () => import('./features/ui-interface/base-ui/ui-accordion/ui-accordion.component').then(m => m.UiAccordionComponent) },
              { path: 'ui-alerts', loadComponent: () => import('./features/ui-interface/base-ui/ui-alerts/ui-alerts.component').then(m => m.UiAlertsComponent) },
              { path: 'ui-avatar', loadComponent: () => import('./features/ui-interface/base-ui/ui-avatar/ui-avatar.component').then(m => m.UiAvatarComponent) },
              { path: 'ui-popovers', loadComponent: () => import('./features/ui-interface/base-ui/ui-popovers/ui-popovers.component').then(m => m.UiPopoversComponent) },
              { path: 'ui-placeholders', loadComponent: () => import('./features/ui-interface/base-ui/ui-placeholders/ui-placeholders.component').then(m => m.UiPlaceholdersComponent) },
              { path: 'ui-pagination', loadComponent: () => import('./features/ui-interface/base-ui/ui-pagination/ui-pagination.component').then(m => m.UiPaginationComponent) },
              { path: 'ui-offcanvas', loadComponent: () => import('./features/ui-interface/base-ui/ui-offcanvas/ui-offcanvas.component').then(m => m.UiOffcanvasComponent) },
              { path: 'ui-nav-tabs', loadComponent: () => import('./features/ui-interface/base-ui/ui-nav-tabs/ui-nav-tabs.component').then(m => m.UiNavTabsComponent) },
              { path: 'ui-modals', loadComponent: () => import('./features/ui-interface/base-ui/ui-modals/ui-modals.component').then(m => m.UiModalsComponent) },
              { path: 'ui-media', loadComponent: () => import('./features/ui-interface/base-ui/ui-media/ui-media.component').then(m => m.UiMediaComponent) },
              { path: 'ui-lightbox', loadComponent: () => import('./features/ui-interface/base-ui/ui-lightbox/ui-lightbox.component').then(m => m.UiLightboxComponent) },
              { path: 'ui-images', loadComponent: () => import('./features/ui-interface/base-ui/ui-images/ui-images.component').then(m => m.UiImagesComponent) },
              { path: 'ui-grid', loadComponent: () => import('./features/ui-interface/base-ui/ui-grid/ui-grid.component').then(m => m.UiGridComponent) },
              { path: 'ui-tooltips', loadComponent: () => import('./features/ui-interface/base-ui/ui-tooltips/ui-tooltips.component').then(m => m.UiTooltipsComponent) },
              { path: 'ui-toasts', loadComponent: () => import('./features/ui-interface/base-ui/ui-toasts/ui-toasts.component').then(m => m.UiToastsComponent) },
              { path: 'ui-dropdowns', loadComponent: () => import('./features/ui-interface/base-ui/ui-dropdowns/ui-dropdowns.component').then(m => m.UiDropdownsComponent) },
              { path: 'ui-colors', loadComponent: () => import('./features/ui-interface/base-ui/ui-colors/ui-colors.component').then(m => m.UiColorsComponent) },
              { path: 'ui-sortable', loadComponent: () => import('./features/ui-interface/base-ui/ui-sortable/ui-sortable.component').then(m => m.UiSortableComponent) }
            ]
          },
          { path: 'forms',
            loadComponent: () => import('./features/ui-interface/forms/forms.component').then(m => m.FormsComponent),
            children: [
              { path: 'form-basic-inputs', loadComponent: () => import('./features/ui-interface/forms/form-elements/form-basic-inputs/form-basic-inputs.component').then(m => m.FormBasicInputsComponent) },
              { path: 'form-checkbox-radios', loadComponent: () => import('./features/ui-interface/forms/form-elements/form-checkbox-radios/form-checkbox-radios.component').then(m => m.FormCheckboxRadiosComponent) },
              { path: 'form-elements', loadComponent: () => import('./features/ui-interface/forms/form-elements/form-elements/form-elements.component').then(m => m.FormElementsComponent) },
              { path: 'form-fileupload', loadComponent: () => import('./features/ui-interface/forms/form-elements/form-fileupload/form-fileupload.component').then(m => m.FormFileuploadComponent) },
              { path: 'form-grid-gutters', loadComponent: () => import('./features/ui-interface/forms/form-elements/form-grid-gutters/form-grid-gutters.component').then(m => m.FormGridGuttersComponent) },
              { path: 'form-input-groups', loadComponent: () => import('./features/ui-interface/forms/form-elements/form-input-groups/form-input-groups.component').then(m => m.FormInputGroupsComponent) },
              { path: 'form-mask', loadComponent: () => import('./features/ui-interface/forms/form-elements/form-mask/form-mask.component').then(m => m.FormMaskComponent) },
              { path: 'form-select', loadComponent: () => import('./features/ui-interface/forms/form-elements/form-select/form-select.component').then(m => m.FormSelectComponent) },
              { path: 'form-select-2', loadComponent: () => import('./features/ui-interface/forms/form-select-2/form-select-2.component').then(m => m.FormSelect2Component) },
              { path: 'form-validation', loadComponent: () => import('./features/ui-interface/forms/form-validation/form-validation.component').then(m => m.FormValidationComponent) },
              { path: 'form-wizard', loadComponent: () => import('./features/ui-interface/forms/form-wizard/form-wizard.component').then(m => m.FormWizardComponent) },
              { path: 'form-floating-labels', loadComponent: () => import('./features/ui-interface/forms/layouts/form-floating-labels/form-floating-labels.component').then(m => m.FormFloatingLabelsComponent) },
              { path: 'form-horizontal', loadComponent: () => import('./features/ui-interface/forms/layouts/form-horizontal/form-horizontal.component').then(m => m.FormHorizontalComponent) },
              { path: 'form-vertical', loadComponent: () => import('./features/ui-interface/forms/layouts/form-vertical/form-vertical.component').then(m => m.FormVerticalComponent) },
              { path: 'form-pickers', loadComponent: () => import('./features/ui-interface/forms/form-pickers/form-pickers.component').then(m => m.FormPickersComponent) }
            ]
          },
          { path: 'charts',
            loadComponent: () => import('./features/ui-interface/charts/charts.component').then(m => m.ChartsComponent),
            children: [
              { path: 'chart-apex', loadComponent: () => import('./features/ui-interface/charts/chart-apex/chart-apex.component').then(m => m.ChartApexComponent) },
              { path: 'prime-ng', loadComponent: () => import('./features/ui-interface/charts/prime-ng/prime-ng.component').then(m => m.PrimeNgComponent) }
            ]
          },
          { path: 'icons',loadComponent: () => import('./features/ui-interface/icons/icons.component').then(m => m.IconsComponent) ,
            children: [
              { path: 'icon-fontawesome', loadComponent: () => import('./features/ui-interface/icons/icon-fontawesome/icon-fontawesome.component').then(m => m.IconFontawesomeComponent) },
              { path: 'icon-feather', loadComponent: () => import('./features/ui-interface/icons/icon-feather/icon-feather.component').then(m => m.IconFeatherComponent) },
              { path: 'icon-ionic', loadComponent: () => import('./features/ui-interface/icons/icon-ionic/icon-ionic.component').then(m => m.IconIonicComponent) },
              { path: 'icon-material', loadComponent: () => import('./features/ui-interface/icons/icon-material/icon-material.component').then(m => m.IconMaterialComponent) },
              { path: 'icon-pe7', loadComponent: () => import('./features/ui-interface/icons/icon-pe7/icon-pe7.component').then(m => m.IconPe7Component) },
              { path: 'icon-simpleline', loadComponent: () => import('./features/ui-interface/icons/icon-simpleline/icon-simpleline.component').then(m => m.IconSimplelineComponent) },
              { path: 'icon-themify', loadComponent: () => import('./features/ui-interface/icons/icon-themify/icon-themify.component').then(m => m.IconThemifyComponent) },
              { path: 'icon-weather', loadComponent: () => import('./features/ui-interface/icons/icon-weather/icon-weather.component').then(m => m.IconWeatherComponent) },
              { path: 'icon-typicon', loadComponent: () => import('./features/ui-interface/icons/icon-typicon/icon-typicon.component').then(m => m.IconTypiconComponent) },
              { path: 'icon-flag', loadComponent: () => import('./features/ui-interface/icons/icon-flag/icon-flag.component').then(m => m.IconFlagComponent) },
              { path: 'icon-bootstrap', loadComponent: () => import('./features/ui-interface/icons/icon-bootstrap/icon-bootstrap.component').then(m => m.IconBootstrapComponent) },
              { path: 'icon-remix', loadComponent: () => import('./features/ui-interface/icons/icon-remix/icon-remix.component').then(m => m.IconRemixComponent) },
              { path: 'icon-tabler', loadComponent: () => import('./features/ui-interface/icons/icon-tabler/icon-tabler.component').then(m => m.IconTablerComponent) }
            ]
          },
          { path: 'maps', loadComponent: () => import('./features/ui-interface/maps/maps.component').then(m => m.MapsComponent),
            children:[
              { path: 'leaflets', loadComponent: () => import('./features/ui-interface/maps/leaflet/leaflet.component').then(m => m.LeafletComponent) 

              }] 
          },
          { path: 'table', loadComponent: () => import('./features/ui-interface/table/table.component').then(m => m.TableComponent),      
            children: [ 
            { path: 'tables-basic', loadComponent: () => import('./features/ui-interface/table/tables-basic/tables-basic.component').then((m) => m.TablesBasicComponent),},
            { path: 'data-basic', loadComponent: () =>import('./features/ui-interface/table/data-tables/data-tables.component').then((m) => m.DataTablesComponent),},
          ],
            },
          { path: 'inventory',
            loadComponent: () => import('./features/inventory/inventory.component').then(m => m.InventoryComponent),
            children: [
              { path: 'barcode', loadComponent: () => import('./features/inventory/barcode/barcode.component').then(m => m.BarcodeComponent) },
                  // route avec code param optionnel
              { path: 'barcode/:code', loadComponent: () => import('./features/inventory/barcode/barcode.component').then(m => m.BarcodeComponent) },
              { path: 'brand-list', loadComponent: () => import('./features/inventory/brand-list/brand-list.component').then(m => m.BrandListComponent) },
              { path: 'category', loadComponent: () => import('./features/inventory/category/category.component').then(m => m.CategoryComponent),
                children: [
                    { path: 'category-list', loadComponent: () => import('./features/inventory/category/category-list/category-list.component').then(m => m.CategoryListComponent) },
                    { path: 'sub-categories', loadComponent: () => import('./features/inventory/category/sub-categories/sub-categories.component').then(m => m.SubCategoriesComponent) }
                  ] 
              },
              { path: 'warranty', loadComponent: () => import('./features/inventory/warranty/warranty.component').then(m => m.WarrantyComponent) },
              { path: 'product', loadComponent: () => import('./features/inventory/product/product.component').then(m => m.ProductComponent),
                children: [
                    { path: 'edit-product', loadComponent: () => import('./features/inventory/product/edit-product/edit-product.component').then(m => m.EditProductComponent) },
                    { path: 'product-list', loadComponent: () => import('./features/inventory/product/product-list/product-list.component').then(m => m.ProductListComponent) },
                    { path: 'add-product', loadComponent: () => import('./features/inventory/product/add-product/add-product.component').then(m => m.AddProductComponent) },
                    { path: 'expired-products', loadComponent: () => import('./features/inventory/product/expired-products/expired-products.component').then(m => m.ExpiredProductsComponent) },
                    { path: 'product-details', loadComponent: () => import('./features/inventory/product/product-details/product-details.component').then(m => m.ProductDetailsComponent) }
                  ]
              },
              { path: 'units', loadComponent: () => import('./features/inventory/units/units.component').then(m => m.UnitsComponent) },
              { path: 'varriant-attributes', loadComponent: () => import('./features/inventory/varriant-attributes/varriant-attributes.component').then(m => m.VarriantAttributesComponent) },
              { path: 'qrcode', loadComponent: () => import('./features/inventory/qrcode/movement-history.component').then(m => m.MovementHistoryComponent) },
              { path: 'stock', loadComponent: () => import('./features/inventory/stock/stock.component').then(m => m.StockComponent),
                children: [
                    { path: 'low-stocks', loadComponent: () => import('./features/inventory/stock/low-stocks/low-stocks.component').then(m => m.LowStocksComponent) }
                  ]
              }
            ]
          },
          { path: 'stock',
            loadComponent: () => import('./features/stock/stock.component').then(m => m.StockComponent),
            children: [
              { path: 'manage-stocks', loadComponent: () => import('./features/stock/manage-stocks/manage-stocks.component').then(m => m.ManageStocksComponent) },
              { path: 'stock-adjustment', loadComponent: () => import('./features/stock/stock-adjustment/stock-adjustment.component').then(m => m.StockAdjustmentComponent) },
              { path: 'stock-transfer', loadComponent: () => import('./features/stock/stock-transfer/stock-transfer.component').then(m => m.StockTransferComponent) }
            ]
          },
          { path: 'sales',
            loadComponent: () => import('./features/sales/sales.component').then(m => m.SalesComponent),
            children: [
              { path: 'online-order', loadComponent: () => import('./features/sales/sales-list/sales-list.component').then(m => m.SalesListComponent) },
              { path: 'sales-return', loadComponent: () => import('./features/sales/sales-returns/sales-returns.component').then(m => m.SalesReturnsComponent) },
              { path: 'quotation-list', loadComponent: () => import('./features/sales/quotation-list/quotation-list.component').then(m => m.QuotationListComponent) }, 
              { path: 'pos', loadComponent: () => import('./features/sales/pos/pos.component').then(m => m.PosComponent) },
              { path: 'pos-order', loadComponent: () => import('./features/sales/pos-order/pos-order.component').then(m => m.PosOrderComponent) },
              { path: 'invoice', loadComponent: () => import('./features/sales/invoice/invoice.component').then(m => m.InvoiceComponent) },
              { path: 'invoice-details', loadComponent: () => import('./features/sales/invoice-details/invoice-details.component').then(m => m.InvoiceDetailsComponent) },
              { path: 'pos-2', loadComponent: () => import('./features/sales/pos-2/pos-2.component').then(m => m.Pos2Component) },
              { path: 'pos-3', loadComponent: () => import('./features/sales/pos-3/pos-3.component').then(m => m.Pos3Component) },
              { path: 'pos-4', loadComponent: () => import('./features/sales/pos-4/pos-4.component').then(m => m.Pos4Component) },
              { path: 'pos-5', loadComponent: () => import('./features/sales/pos-5/pos-5.component').then(m => m.Pos5Component) }  
            ]
          },
          { path: 'promo',
            loadComponent: () => import('./features/promo/promo.component').then(m => m.PromoComponent),
            children: [
              {
                path: 'coupons',
                loadComponent: () => import('./features/promo/coupons/coupons.component').then(m => m.CouponsComponent)
              },
              {
                path: 'gift-cards',
                loadComponent: () => import('./features/promo/gift-cards/gift-cards.component').then(m => m.GiftCardsComponent)
              },
              {
                path: 'discount',
                loadComponent: () => import('./features/promo/discount/discount.component').then(m => m.DiscountComponent)
              },
              {
                path: 'discount-plan',
                  loadComponent: () => import('./features/promo/discount-plan/discount-plan.component').then(m => m.DiscountPlanComponent)
              },
            ]
          },
          {  path: 'purchase',
            loadComponent: () => import('./features/purchase/purchase.component').then(m => m.PurchaseComponent),
            children: [
              { path: 'purchase-list', loadComponent: () => import('./features/purchase/purchase-list/purchase-list.component').then(m => m.PurchaseListComponent) },
              { path: 'purchase-order-report', loadComponent: () => import('./features/purchase/purchase-order-report/purchase-order-report.component').then(m => m.PurchaseOrderReportComponent) },
              { path: 'purchase-returns', loadComponent: () => import('./features/purchase/purchase-returns/purchase-returns.component').then(m => m.PurchaseReturnsComponent) },
            ],
          },
          {  path: 'finance',
            loadComponent: () => import('./features/finance/finance.component').then(m => m.FinanceComponent),
            children: [
              { path: 'income', loadComponent: () => import('./features/finance/income/income.component').then(m => m.IncomeComponent) },
              { path: 'income-category', loadComponent: () => import('./features/finance/income-category/income-category.component').then(m => m.IncomeCategoryComponent) },
              { path: 'account-list', loadComponent: () => import('./features/finance/account-list/account-list.component').then(m => m.AccountListComponent) },
              { path: 'money-transfer', loadComponent: () => import('./features/finance/money-transfer/money-transfer.component').then(m => m.MoneyTransferComponent) },
              { path: 'balance-sheet', loadComponent: () => import('./features/finance/balance-sheet/balance-sheet.component').then(m => m.BalanceSheetComponent) },
              { path: 'trial-balance', loadComponent: () => import('./features/finance/trial-balance/trial-balance.component').then(m => m.TrialBalanceComponent) },
              { path: 'cash-flow', loadComponent: () => import('./features/finance/cash-flow/cash-flow.component').then(m => m.CashFlowComponent) },
              { path: 'account-statement', loadComponent: () => import('./features/finance/account-statement/account-statement.component').then(m => m.AccountStatementComponent) },
            ]
          },
          { path: 'people',
            loadComponent: () => import('./features/people/people.component').then(m => m.PeopleComponent),
            children: [
              {
                path: 'customers',
                loadComponent: () => import('./features/people/customers/customers.component').then(m => m.CustomersComponent),
              },
              {
                path: 'store-list',
                loadComponent: () => import('./features/people/store-list/store-list.component').then(m => m.StoreListComponent),
              },
              {
                path: 'warehouse',
                loadComponent: () => import('./features/people/warehouse/warehouse.component').then(m => m.WarehouseComponent),
              },
              {
                path: 'suppliers-list',
                loadComponent: () => import('./features/people/suppliers/suppliers.component').then(m => m.SuppliersComponent),
              },
              {
                path: 'billers',
                loadComponent: () => import('./features/people/billers/billers.component').then(m => m.BillersComponent),
              },
            ],
          },
          { path: 'expense',
            loadComponent: () => import('./features/expense/expense.component').then(m => m.ExpenseComponent),
            children: [ 
              { path: 'expense-category', loadComponent: () => import('./features/expense/expense-category/expense-category.component').then(m => m.ExpenseCategoryComponent) },
              { path: 'expense-list', loadComponent: () => import('./features/expense/expense-list/expense-list.component').then(m => m.ExpenseListComponent) },
            ],
          },
          { path: 'hrm', loadComponent: () => import('./features/hrm/hrm.component').then(m => m.HrmComponent),
            children: [
            { path: 'designation', loadComponent: () => import('./features/hrm/designation/designation.component').then(m => m.DesignationComponent) },
            { path: 'department', loadComponent: () => import('./features/hrm/department/department.component').then(m => m.DepartmentComponent) ,
              children: [
                { path: 'department-grid', loadComponent: () => import('./features/hrm/department/department-grid/department-grid.component').then(m => m.DepartmentGridComponent) },
                { path: 'department-list', loadComponent: () => import('./features/hrm/department/department-list/department-list.component').then(m => m.DepartmentListComponent) },
              ],  
            },
            { path: 'attendance', loadComponent: () => import('./features/hrm/attendence/attendence.component').then(m => m.AttendenceComponent),
              children: [
                { path: 'attendance-admin', loadComponent: () => import('./features/hrm/attendence/attendance-admin/attendance-admin.component').then(m => m.AttendanceAdminComponent) },
                { path: 'attendance-employee', loadComponent: () => import('./features/hrm/attendence/attendance-employee/attendance-employee.component').then(m => m.AttendanceEmployeeComponent) },
              ],
            },
            { path: 'employee', loadComponent: () => import('./features/hrm/employee/employee.component').then(m => m.EmployeeComponent),
              children: [
                {
                  path: 'add-employee',
                  loadComponent: () => import('./features/hrm/employee/add-employee/add-employee.component').then(m => m.AddEmployeeComponent),
                },
                {
                  path: 'edit-employee',
                  loadComponent: () => import('./features/hrm/employee/edit-employee/edit-employee.component').then(m => m.EditEmployeeComponent),
                },
                {
                  path: 'employee-grid',
                  loadComponent: () => import('./features/hrm/employee/employee-grid/employee-grid.component').then(m => m.EmployeeGridComponent),
                },
                {
                  path: 'employee-list',
                  loadComponent: () => import('./features/hrm/employee/employee-list/employee-list.component').then(m => m.EmployeeListComponent),
                },
                { path: 'employee-details', loadComponent: () => import('./features/hrm/employee/employee-details/employee-details.component').then(m => m.EmployeeDetailsComponent) },
              ],
            },
            { path: 'holidays', loadComponent: () => import('./features/hrm/holidays/holidays.component').then(m => m.HolidaysComponent) },
            { path: 'leaves', loadComponent: () => import('./features/hrm/leaves/leaves.component').then(m => m.LeavesComponent),
              children: [
                { path: 'leaves-admin', loadComponent: () => import('./features/hrm/leaves/leaves-admin/leaves-admin.component').then(m => m.LeavesAdminComponent) },
                { path: 'leaves-employee', loadComponent: () => import('./features/hrm/leaves/leaves-employee/leaves-employee.component').then(m => m.LeavesEmployeeComponent) },
                { path: 'leaves-type', loadComponent: () => import('./features/hrm/leaves/leaves-type/leaves-type.component').then(m => m.LeavesTypeComponent) },
              ],
            },
            { path: 'shift', loadComponent: () => import('./features/hrm/shift/shift.component').then(m => m.ShiftComponent) },
            { path: 'payroll', loadComponent: () => import('./features/hrm/payroll/payroll.component').then(m => m.PayrollComponent),
              children: [
                { path: 'payroll-list', loadComponent: () => import('./features/hrm/payroll/payroll-list/payroll-list.component').then(m => m.PayrollListComponent) },
                { path: 'payslip', loadComponent: () => import('./features/hrm/payroll/payslip/payslip.component').then(m => m.PayslipComponent) },

              ]
            }
          ]
        },
        { path: 'reports', loadComponent: () => import('./features/reports/reports.component').then(m => m.ReportsComponent),    
            children: [
            { path: 'customer-report', loadComponent: () => import('./features/reports/customer-report/customer-report.component').then(m => m.CustomerReportComponent) },
            { path: 'expense-report', loadComponent: () => import('./features/reports/expense-report/expense-report.component').then(m => m.ExpenseReportComponent) },
            { path: 'income-report', loadComponent: () => import('./features/reports/income-report/income-report.component').then(m => m.IncomeReportComponent) },
            { path: 'inventory-report', loadComponent: () => import('./features/reports/inventory-report/inventory-report.component').then(m => m.InventoryReportComponent) },
            { path: 'invoice-report', loadComponent: () => import('./features/reports/invoice-report/invoice-report.component').then(m => m.InvoiceReportComponent) },
            { path: 'profit-and-loss', loadComponent: () => import('./features/reports/profit-and-loss/profit-and-loss.component').then(m => m.ProfitAndLossComponent) },
            { path: 'purchase-report', loadComponent: () => import('./features/reports/purchase-report/purchase-report.component').then(m => m.PurchaseReportComponent) },
            { path: 'sales-report', loadComponent: () => import('./features/reports/sales-report/sales-report.component').then(m => m.SalesReportComponent) },
            { path: 'best-seller', loadComponent: () => import('./features/reports/best-seller/best-seller.component').then(m => m.BestSellerComponent) },
            { path: 'supplier-report', loadComponent: () => import('./features/reports/supplier-report/supplier-report.component').then(m => m.SupplierReportComponent) },
              { path: 'stock-history', loadComponent: () => import('./features/reports/stock-history/stock-history.component').then(m => m.StockHistoryComponent) },
            { path: 'sold-stock', loadComponent: () => import('./features/reports/sold-stock/sold-stock.component').then(m => m.SoldStockComponent) },
            { path: 'supplier-due-report', loadComponent: () => import('./features/reports/supplier-due-report/supplier-due-report.component').then(m => m.SupplierDueReportComponent) },
            { path: 'customer-due-report', loadComponent: () => import('./features/reports/customer-due-report/customer-due-report.component').then(m => m.CustomerDueReportComponent) },
            { path: 'tax-report', loadComponent: () => import('./features/reports/tax-report/tax-report.component').then(m => m.TaxReportComponent) },     
            { path: 'annual-report', loadComponent: () => import('./features/reports/annual-report/annual-report.component').then(m => m.AnnualReportComponent) },
            { path: 'product-report', loadComponent: () => import('./features/reports/product/product-report/product-report.component').then(m => m. ProductReportComponent) },
            { path: 'product-expiry-report', loadComponent: () => import('./features/reports/product/product-expiry-report/product-expiry-report.component').then(m => m.ProductExpiryReportComponent) },
            { path: 'sales-tax', loadComponent: () => import('./features/reports/sales-tax/sales-tax.component').then(m => m.SalesTaxComponent) },
            { path: 'product-quantity-alert', loadComponent: () => import('./features/reports/product/product-quantity-alert/product-quantity-alert.component').then(m => m.ProductQuantityAlertComponent) }
          ]
        },
        { path: 'content', loadComponent: () => import('./features/content-cms/content-cms.component').then(m => m.ContentCmsComponent), children: [
          { path: 'pages', loadComponent: () => import('./features/content-cms/pages/pages.component').then(m => m.PagesComponent) },
          { path: 'testimonial', loadComponent: () => import('./features/content-cms/testimonial/testimonial.component').then(m => m.TestimonialComponent) },
          { path: 'faq', loadComponent: () => import('./features/content-cms/faq/faq.component').then(m => m.FaqComponent) },
          { path: 'blogs', loadComponent: () => import('./features/content-cms/blogs/blogs.component').then(m => m.BlogsComponent),
            children: [
              { path: 'all-blog', loadComponent: () => import('./features/content-cms/blogs/all-blog/all-blog.component').then(m => m.AllBlogComponent) },
              { path: 'blog-tag', loadComponent: () => import('./features/content-cms/blogs/blog-tag/blog-tag.component').then(m => m.BlogTagComponent) },
              { path: 'categories', loadComponent: () => import('./features/content-cms/blogs/categories/categories.component').then(m => m.CategoriesComponent) },
              { path: 'blog-comments', loadComponent: () => import('./features/content-cms/blogs/blog-comments/blog-comments.component').then(m => m.BlogCommentsComponent) },
              { path: 'blog-details', loadComponent: () => import('./features/content-cms/blogs/blog-details/blog-details.component').then(m => m.BlogDetailsComponent) }
            ]
           },
            { path: 'location', loadComponent: () => import('./features/content-cms/location/location.component').then(m => m.LocationComponent), children: [ 
              { path: 'countries', loadComponent: () => import('./features/content-cms/location/countries/countries.component').then(m => m.CountriesComponent) }, 
              { path: 'cities', loadComponent: () => import('./features/content-cms/location/cities/cities.component').then(m => m.CitiesComponent) }, 
              { path: 'states', loadComponent: () => import('./features/content-cms/location/states/states.component').then(m => m.StatesComponent) } 
            ] 
          
           }
        ]
        },
        { path: 'user-management', loadComponent: () => import('./features/user-management/user-management.component').then(m => m.UserManagementComponent), children: [
          { path: 'roles-permissions', loadComponent: () => import('./features/user-management/roles-permissions/roles-permissions.component').then(m => m.RolesPermissionsComponent) },
          { path: 'delete-account', loadComponent: () => import('./features/user-management/delete-account/delete-account.component').then(m => m.DeleteAccountComponent) },
          { path: 'users', loadComponent: () => import('./features/user-management/users/users.component').then(m => m.UsersComponent) },
          { path: 'permissions', loadComponent: () => import('./features/user-management/permissions/permissions.component').then(m => m.PermissionsComponent) }
        ] 
        },
        { path: 'pages', loadComponent: () => import('./features/pages/pages.component').then(m => m.PagesComponent), children: [
          { path: 'blank-page', loadComponent: () => import('./features/pages/blank-page/blank-page.component').then(m => m.BlankPageComponent) },
          { path: 'under-maintenance', loadComponent: () => import('./features/pages/under-maintenance/under-maintenance.component').then(m => m.UnderMaintenanceComponent) },
          { path: 'profile', loadComponent: () => import('./features/pages/profile/profile.component').then(m => m.ProfileComponent) },
          { path: 'coming-soon', loadComponent: () => import('./features/pages/coming-soon/coming-soon.component').then(m => m.ComingSoonComponent) },
          { path: 'places', loadComponent: () => import('./features/pages/places/places.component').then(m => m.PlacesComponent),
            children:[
              { path: 'countries', loadComponent: () => import('./features/pages/places/countries/countries.component').then(m => m.CountriesComponent) },
              { path: 'states', loadComponent: () => import('./features/pages/places/states/states.component').then(m => m.StatesComponent) }
            ] 
            },
          { path: 'activities', loadComponent: () => import('./features/pages/activities/activities.component').then(m => m.ActivitiesComponent) },
          { path: 'pricing', loadComponent: () => import('./features/pages/pricing/pricing.component').then(m => m.PricingComponent) }
        ] 
        },
        { path: 'settings',
          loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent),
          children: [
            { path: 'financial-settings', loadComponent: () => import('./features/settings/financial-settings/financial-settings.component').then(m => m.FinancialSettingsComponent),
              children: [
                { path: 'bank-settings-grid', loadComponent: () => import('./features/settings/financial-settings/bank-settings-grid/bank-settings-grid.component').then(m => m.BankSettingsGridComponent) },
                { path: 'bank-settings-list', loadComponent: () => import('./features/settings/financial-settings/bank-settings-list/bank-settings-list.component').then(m => m.BankSettingsListComponent) },
                { path: 'currency-settings', loadComponent: () => import('./features/settings/financial-settings/currency-settings/currency-settings.component').then(m => m.CurrencySettingsComponent) },
                { path: 'payment-gateway-settings', loadComponent: () => import('./features/settings/financial-settings/payment-gateway-settings/payment-gateway-settings.component').then(m => m.PaymentGatewaySettingsComponent) },
                { path: 'tax-rates', loadComponent: () => import('./features/settings/financial-settings/tax-rates/tax-rates.component').then(m => m.TaxRatesComponent) },
              ]
             },
            { path: 'app-settings', loadComponent: () => import('./features/settings/app-settings/app-settings.component').then(m => m.AppSettingsComponent),
              children: [
                { path: 'custom-fields', loadComponent: () => import('./features/settings/app-settings/custom-fields/custom-fields.component').then(m => m.CustomFieldsComponent) }, 
                { path: 'invoice-settings', loadComponent: () => import('./features/settings/app-settings/invoice-settings/invoice-settings.component').then(m => m.InvoiceSettingsComponent) },
                { path: 'printer-settings', loadComponent: () => import('./features/settings/app-settings/printer-settings/printer-settings.component').then(m => m.PrinterSettingsComponent) },
                { path: 'pos-settings', loadComponent: () => import('./features/settings/app-settings/pos-settings/pos-settings.component').then(m => m.PosSettingsComponent) },
                { path: 'invoice-template', loadComponent: () => import('./features/settings/app-settings/invoice-template/invoice-template.component').then(m => m.InvoiceTemplateComponent) },
                { path: 'signatures', loadComponent: () => import('./features/settings/app-settings/signatures/signatures.component').then(m => m.SignaturesComponent) },
              ]
            },
            { path: 'general-settings', loadComponent: () => import('./features/settings/general-settings/general-settings.component').then(m => m.GeneralSettingsComponent),
              children: [
                { path: 'connected-apps', loadComponent: () => import('./features/settings/general-settings/connected-apps/connected-apps.component').then(m => m.ConnectedAppsComponent) }, 
                { path: 'notification', loadComponent: () => import('./features/settings/general-settings/notification/notification.component').then(m => m.NotificationComponent) },
                { path: 'profile', loadComponent: () => import('./features/settings/general-settings/profile/profile.component').then(m => m.ProfileComponent) },
                { path: 'security-settings', loadComponent: () => import('./features/settings/general-settings/security-settings/security-settings.component').then(m => m.SecuritySettingsComponent) },
              ]
             },
            { path: 'other-settings', loadComponent: () => import('./features/settings/other-settings/other-settings.component').then(m => m.OtherSettingsComponent),
              children: [
                { path: 'ban-ip-address', loadComponent: () => import('./features/settings/other-settings/ban-ip-address/ban-ip-address.component').then(m => m.BanIpAddressComponent) },
                { path: 'storage-settings', loadComponent: () => import('./features/settings/other-settings/storage-settings/storage-settings.component').then(m => m.StorageSettingsComponent) },
              ]
             },
            { path: 'system-settings', loadComponent: () => import('./features/settings/system-settings/system-settings.component').then(m => m.SystemSettingsComponent),
              children: [
                { path: 'email-settings', loadComponent: () => import('./features/settings/system-settings/email-settings/email-settings.component').then(m => m.EmailSettingsComponent) },
                { path: 'gdpr-settings', loadComponent: () => import('./features/settings/system-settings/gdpr-settings/gdpr-settings.component').then(m => m.GdprSettingsComponent) },
                { path: 'sms-gateway', loadComponent: () => import('./features/settings/system-settings/sms-gateway/sms-gateway.component').then(m => m.SmsGatewayComponent) },
                { path: 'otp-settings', loadComponent: () => import('./features/settings/system-settings/otp-settings/otp-settings.component').then(m => m.OtpSettingsComponent) },
                { path: 'email-templates', loadComponent: () => import('./features/settings/system-settings/email-templates/email-templates.component').then(m => m.EmailTemplatesComponent) },
                { path: 'sms-templates', loadComponent: () => import('./features/settings/system-settings/sms-templates/sms-templates.component').then(m => m.SmsTemplatesComponent) },
              ]
             },
            { path: 'website-settings', loadComponent: () => import('./features/settings/website-settings/website-settings.component').then(m => m.WebsiteSettingsComponent),
              children: [
                { path: 'company-settings', loadComponent: () => import('./features/settings/website-settings/company-settings/company-settings.component').then(m => m.CompanySettingsComponent) }, 
                { path: 'language-settings', loadComponent: () => import('./features/settings/website-settings/language-settings/language-settings.component').then(m => m.LanguageSettingsComponent) },
                { path: 'language-settings-web', loadComponent: () => import('./features/settings/website-settings/language-settings-web/language-settings-web.component').then(m => m.LanguageSettingsWebComponent) },
                { path: 'appearance', loadComponent: () => import('./features/settings/website-settings/appearance/appearance.component').then(m => m.AppearanceComponent) },
                { path: 'system-settings', loadComponent: () => import('./features/settings/website-settings/system-settings/system-settings.component').then(m => m.SystemSettingsComponent) },
                { path: 'prefixes', loadComponent: () => import('./features/settings/website-settings/prefixes/prefixes.component').then(m => m.PrefixesComponent) },
                { path: 'preference', loadComponent: () => import('./features/settings/website-settings/preference/preference.component').then(m => m.PreferenceComponent) },
                { path: 'localization-settings', loadComponent: () => import('./features/settings/website-settings/localization-settings/localization-settings.component').then(m => m.LocalizationSettingsComponent) },
                { path: 'social-authentication', loadComponent: () => import('./features/settings/website-settings/social-authentication/social-authentication.component').then(m => m.SocialAuthenticationComponent) }
              ]
             },
          ]
        }
        
        
        
        
          
            
            

        ]
  },
  {
    path: '**',
    redirectTo: 'error/error-404',
    pathMatch: 'full',
  }
      
]as const;
