import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    authenticate(provider) {
      this.get('session').authenticate('authenticator:firebase-simple-auth','firebase-simple-auth',{
        provider: provider,
        email: this.get('email'),
        password: this.get('password')
      }).then(function (data) {
        console.log("login", data);
      });
    },

    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
