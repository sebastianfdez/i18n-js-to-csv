export const myAccount = {
  orderDetails: {
    orderId: 'Order #',
    placed: 'Placed',
    status: 'Status',
    shippedOn: 'Shipped on',
    inProcess: 'In process...',
    pending: 'Pending',
    deliveryStatus_IN_TRANSIT: 'In Transit',
    deliveryStatus_READY_FOR_PICKUP: 'Ready for Pickup',
    deliveryStatus_READY_FOR_SHIPPING: 'Ready for Shipping',
    deliveryStatus_WAITING: 'Waiting',
    deliveryStatus_DELIVERING: 'Delivering',
    deliveryStatus_PICKPACK: 'Preparing for Shipment',
    deliveryStatus_PICKUP_COMPLETE: 'Pickup Complete',
    deliveryStatus_DELIVERY_COMPLETED: 'Delivery Complete',
    deliveryStatus_PAYMENT_NOT_CAPTURED: 'Payment Issue',
    deliveryStatus_READY: 'In Process',
    deliveryStatus_DELIVERY_REJECTED: 'Delivery Rejected',
    deliveryStatus_TAX_NOT_COMMITTED: 'Tax Issue',
    statusDisplay_cancelled: 'Cancelled',
    statusDisplay_cancelling: 'Cancel Pending',
    statusDisplay_completed: 'Completed',
    statusDisplay_created: 'Created',
    statusDisplay_error: 'Pending',
    statusDisplay_Error: 'Pending',
    statusDisplay_open: 'Open',
    statusDisplay_processing: 'In Process',
    statusDisplay_SPLIT: 'Split',
    statusDisplay_OPEN: 'Order registered',
    statusDisplay_SHIPMENT_ON_GOING: 'Order in process',
    statusDisplay_SHIPPED: 'Order shipped',
    statusDisplay_INVOICED: 'Order invoiced',
    statusDisplay_CANCELLED: 'Order cancelled',
    informationDO: 'Information dated',
    informations: 'Informations',
    shippingMode: 'Shipping mode',
    addresses: 'Addresses',
    packagingList: 'Packing List',
    invoices: 'Invoices',
    deliveryAddress: 'Delivery address',
    invoiceAddress: 'Invoice address',
    paymentAddress: 'Payment address',
    quantity: 'Quantity',
    deliveryPlanned: 'Delivery Planned',
    shipped: 'Shipped',
    invoiced: 'Invoiced',
    duplicateSuccess: 'Order successfully duplicated',
    noPackaging: 'No packing specified',
    consignmentTracking: {
      action: 'Track package',
      dialog: {
        header: 'Tracking Information',
        shipped: 'Shipped',
        estimate: 'Estimated Delivery',
        carrier: 'Delivery Service',
        trackingId: 'Tracking Number',
        noTracking:
          'The package has not been dispatched from the warehouse. ' +
          'The tracking information will be available after the package is shipped.',
        loadingHeader: 'Consignment Tracking',
      },
    },
    cancellationAndReturn: {
      returnAction: 'Request a Return',
      cancelAction: 'Cancel Items',
      item: 'Item',
      itemPrice: 'Item Price',
      quantity: 'Max Quantity',
      returnQty: 'Quantity to Return',
      cancelQty: 'Quantity to Cancel',
      setAll: 'Set all quantities to maximum',
      totalPrice: 'Total',
      submit: 'Submit Request',
      returnSuccess: 'Your return request ({{rma}}) was submitted',
      cancelSuccess:
        'Your cancellation request was submitted (original order {{orderCode}} will be updated)',
    },
  },
  orderHistory: {
    orderHistory: 'My orders',
    purchaseOrderNumber: 'My order number',
    ntnErpRef: 'My NTN-SNR order number',
    partNumber: 'Part number',
    date: 'Order date',
    fromDate: 'From date',
    toDate: 'To Date',
    status: 'Status',
    total: 'Amount incl. taxes',
    noOrders: 'There is no order records for this account.',
    startShopping: 'Start Shopping',
    sortByMostRecent: 'Sort by Most recent',
    downloadOrderList: 'Download my order list',
    downloadBackorders: 'Download my backorders',
    filter: 'Filter your orders',
    search: 'Search',
    diplayOptions: 'Display options',
    showAll: 'Show all products',
    showFiltered: 'Show only products with current or planned deliveries',
    lastOrder: 'Latest order',
    errorDownloadOrderList: 'Error exporting orders',
    errorDownloadBackorderList: 'Error exporting backorders',
  },
  myDeliveries: {
    shippingDate: 'Shipping date',
    tackingNumber: 'Tracking number',
    ntnErpRef: 'My NTN-SNR order number',
    purchaseOrderNumber: 'My order number',
    packingListNumber: 'Packing list number',
    fromDate: 'From date',
    toDate: 'To Date',
    search: 'Search',
    filter: 'Filter your deliveries',
    date: 'Shipping date',
  },
  myInvoices: {
    invoiceNumber: 'NTN-SNR invoice number',
    invoiceDate: 'Invoices from',
    dueDate: 'Due date',
    amount: 'Amount inc. taxes',
    filter: 'Filter your invoices',
    ntnErpRef: 'My NTN-SNR order number',
    purchaseOrderNumber: 'My order number',
    date: 'Invoices date',
    fromDate: 'From date',
    toDate: 'To Date',
    duefromDate: 'From date',
    dueToDate: 'To Date',
    search: 'Search',
    downloadInvoiceList: 'Download invoice list',
    exportYourInvoicesError: 'Error exporting invoices',
    notaFiscal: 'Nota Fiscal',
    downloadCustoms: 'Download list for customs',
    eInvoices: 'E-Invoices',
    eInvoicesBody: `To receive ORIGINAL invoices, please visit our Partner's platform`,
    eInvoicesBodyNoLink: `To get a access to ORIGINAL e-invoices, please contact your sales contact`,
    eInvoicesButton: 'Access to E-Invoices',
  },
  closeAccount: {
    confirmAccountClosure: 'Confirm Account Closure',
    confirmAccountClosureMessage:
      'Are you sure you want to close your account?',
    closeMyAccount: 'CLOSE MY ACCOUNT',
    accountClosedSuccessfully: 'Account closed with success',
    accountClosedFailure: 'Failed to close account',
  },
  updateEmailForm: {
    newEmailAddress: {
      label: 'New email address',
      placeholder: 'Enter email',
    },
    confirmNewEmailAddress: {
      label: 'Confirm new email address',
      placeholder: 'Enter email',
    },
    enterValidEmail: 'Please enter a valid email.',
    bothEmailMustMatch: 'Both emails must match',
    password: {
      label: 'Password',
      placeholder: 'Enter password',
    },
    pleaseInputPassword: 'Please input password',
    emailUpdateSuccess: 'Success. Please sign in with {{ newUid }}',
  },
  updatePasswordForm: {
    oldPassword: {
      label: 'Old Password',
      placeholder: 'Old Password',
    },
    oldPasswordIsRequired: 'Old password is required.',
    newPassword: {
      label: 'New Password',
      placeholder: 'New Password',
    },
    passwordMinRequirements:
      'Password must be six characters minimum, with one uppercase letter, one number, one symbol',
    confirmPassword: {
      label: 'Confirm New Password',
      placeholder: 'Confirm Password',
    },
    bothPasswordMustMatch: 'Both password must match',
    passwordUpdateSuccess: 'Password updated with success',
  },
  updateProfileForm: {
    title: '',
    none: '',
    firstName: {
      label: 'First name',
      placeholder: 'First name',
    },
    firstNameIsRequired: 'First name is required.',
    lastName: {
      label: 'Last name',
      placeholder: 'Last name',
    },
    lastNameIsRequired: 'Last name is required.',
    profileUpdateSuccess: 'Personal details successfully updated',
  },
  consentManagementForm: {
    clearAll: 'Clear all',
    selectAll: 'Select all',
    message: {
      success: {
        given: 'Consent successfully given.',
        withdrawn: 'Consent successfully withdrawn.',
      },
    },
  },
  myCoupons: {
    noCouponsMessage: 'You have no coupons available.',
    effectiveTitle: 'Effective:',
    Effective: 'EFFECTIVE',
    PreSession: 'EFFECTIVE SOON',
    ExpireSoon: 'EXPIRING SOON',
    readMore: 'Read more',
    notification: 'Notification',
    findProducts: 'Find Products',
    status: 'Status:',
    dialogTitle: 'Coupon',
    claimCustomerCoupon: 'You have successfully claimed this coupon.',
    myCoupons: 'My coupons',
    startDateAsc: 'Start Date (ascending)',
    startDateDesc: 'Start Date (descending)',
    endDateAsc: 'End Date (ascending)',
    endDateDesc: 'End Date (descending)',
    sortByMostRecent: 'Sort by Most recent',
    notesPreffix:
      'You can set your preferred channels for receiving coupon notifications on the ',
    notesLink: 'Notification Channels',
    notesSuffix: ' page.',
  },
  notificationPreference: {
    message: 'Select your preferred notification channels',
    note: 'Note: ',
    noteMessage:
      'If you deactivate all channels you will not be able to receive any further notifications.',
    EMAIL: 'Email:',
    SMS: 'SMS:',
    SITE_MESSAGE: 'SiteMessage',
  },
  myInterests: {
    item: 'ITEM',
    price: 'PRICE',
    notifications: 'NOTIFICATIONS',
    noInterests: 'You have no registered interests yet.',
    inStock: 'In Stock',
    lowStock: 'Low Stock',
    outOfStock: 'Out of Stock',
    BACK_IN_STOCK: 'Back In Stock',
    sortByMostRecent: 'Sort by Most recent',
    expirationDate: ' - Till {{ expirationDate }}',
    productId: 'ID {{ code }}',
    remove: 'REMOVE',
    sorting: {
      byNameAsc: 'Name (ascending)',
      byNameDesc: 'Name (descending)',
    },
    PRODUCT_QUOTE: 'Quote Requested',
    header: 'My quotes',
  },
  AccountOrderHistoryTabContainer: {
    tabs: {
      AccountOrderHistoryComponent: 'ALL ORDERS ({{param}})',
      OrderReturnRequestListComponent: 'RETURNS ({{param}})',
    },
  },
  returnRequestList: {
    returnRequestId: 'Return #',
    orderId: 'Order #',
    date: 'Date Created',
    status: 'Status',
    sortByMostRecent: 'Sort by Most recent',
    statusDisplay_APPROVAL_PENDING: 'Approval Pending',
    statusDisplay_CANCELED: 'Cancelled',
    statusDisplay_CANCELLING: 'Cancelling',
    statusDisplay_WAIT: 'Wait',
    statusDisplay_RECEIVED: 'Received',
    statusDisplay_RECEIVING: 'Receiving',
    statusDisplay_APPROVING: 'Approving',
    statusDisplay_REVERSING_PAYMENT: 'Reversing Payment',
    statusDisplay_PAYMENT_REVERSED: 'Payment Reversed',
    statusDisplay_PAYMENT_REVERSAL_FAILED: 'Payment Reversal Failed',
    statusDisplay_REVERSING_TAX: 'Reversing Tax',
    statusDisplay_TAX_REVERSED: 'Tax Reversed',
    statusDisplay_TAX_REVERSAL_FAILED: 'Tax Reversal Failed',
    statusDisplay_COMPLETED: 'Completed',
  },
  returnRequest: {
    returnRequestId: 'Return Request #',
    orderCode: 'For Order #',
    status: 'Return status',
    cancel: 'Cancel Return Request',
    item: 'Description',
    itemPrice: 'Item Price',
    returnQty: 'Return Quantity',
    total: 'Total',
    summary: 'Return Totals',
    subtotal: 'Subtotal',
    deliveryCode: 'Delivery cost',
    estimatedRefund: 'Estimated refund',
    note:
      'The totals are estimated and may not include applicable taxes or other charges.',
    cancelSuccess: 'Your return request ({{rma}}) was cancelled',
  },
  wishlist: {
    empty: 'No products in your shopping list yet',
  },
  importCart: {
    resources: 'Resources',
    productList: 'NTN-SNR product list',
    productListRunning: 'NTN-SNR export product list in progress',
    inProgress: 'in progress',
    report: 'Report',
    noReport: 'No report found',
    generationInProgress: 'File generation is in progress. You will receive it by email.',
    importProductListRunning: 'NTN-SNR import product list in progress',
    importResult: 'Import result',
    addToBasket: 'Add to basket',
    referencesSuccess: 'reference(s) uploaded successfully',
    referencesSuccessPieces: 'piece(s)',
    referencesBlocked: 'reference(s) blocked',
    referencesBlockedSub: ' Reference is not recognised',
    referencesUnavailable: 'reference(s) unavailable',
    referencesUnavailableSub: 'No price defined for the reference. Please request a quote',
    importSuccess: 'Your basket has been successfully updated',
    importError: 'An error has occured, please contact your ISA',
  },
  navigationSettingsForm: {
    unitIsRequired: '{{ unitType }} is required',
    unitUpdatesSuccess: 'The units have been updated',
    profileUpdateError: 'An error has occurred',
    unitType: {
      force: 'Force',
      length: 'Dimension',
      mass: 'Weight',
      temperature: 'Temperature',
      angularVelocity: 'Speed',
      volume: 'Volume',
    },
  },
};
