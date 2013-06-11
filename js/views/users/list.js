 define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/users',
  'text!templates/users/list.html'
], function($, _, Backbone, UsersCollection, usersListTemplate){
   var UserListView = Backbone.View.extend({
     tagName:  'div',
     template: _.template(usersListTemplate),

      render: function () {
        var that = this;
        var users = new UserModel();
        users.fetch({
          success: function (users) {
            var template = _.template(this.template(this.model.toJSON()));
            that.$el.html(template);
          }
        })
      }
    });

    var userListView = new UserListView();
}
