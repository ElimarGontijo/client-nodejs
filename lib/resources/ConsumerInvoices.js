'use strict';

var BaseResource = require('../BaseResource');
var restMethod = BaseResource.method;

module.exports = BaseResource.extend({

  path: '/companies/{company_id}/consumerinvoices',
    
  create: restMethod({
    method: 'POST',
    urlParams: ['company_id']
  }),

  list: restMethod({
    method: 'GET',
    urlParams: ['company_id']
  }),

  listItems: restMethod({
    method: 'GET',
    path: '/{id}/items',
    urlParams: ['company_id','id']
  }),

  retrieve: restMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['company_id', 'id']
  }),

  cancel: restMethod({
    method: 'DELETE',
    path: '/{id}',
    urlParams: ['company_id', 'id']
  }),

  events: restMethod({
    method: 'GET',
    path: '/{id}/events',
    urlParams: ['company_id', 'id']
  }), 

  downloadPdf : restMethod({
    method: 'GET',
    path: '/{id}/pdf',
    urlParams: ['company_id', 'id']
  }),
  
  downloadXml : restMethod({
    method: 'GET',
    path: '/{id}/xml',
    urlParams: ['company_id', 'id']
  }),
  
  downloadXmlRejection : restMethod({
    method: 'GET',
    path: '/{id}/xml/rejection',
    urlParams: ['company_id', 'id']
  })

});
