import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('client');
  },

  actions: {
    saveClient(newClient){
      newClient.save().then(() => this.transitionTo('clients'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
