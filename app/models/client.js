import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  address: DS.attr('string'),

  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),

  age: DS.attr('number'),
  height: DS.attr('number'),
  weight: DS.attr('number'),
  phone: DS.attr('phone'),
  admin: DS.attr('boolean'),
  birthday: DS.attr('date'),
});
