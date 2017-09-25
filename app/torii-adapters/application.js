import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/addon/torii-adapters/firebase';

export default ToriiFirebaseAdapter.extend({
  firebase: Ember.inject.service(),
});
