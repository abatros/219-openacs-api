openacs = {
  api2: {
    acs__add_user: require('./lib/acs__add_user.js'),
    acs_group__new: require('./lib/acs_group__new.js'),
    acs_user__delete: require('./lib/acs_user__delete.js'),
    acs_object_type__create_type: require('./lib/acs_object_type__create_type.js'),
    acs_rel_type__create_type: require('./lib/acs_rel_type__create_type.js'),
    acs_rel__new: require('./lib/acs_rel__new.js'),

    application_group__new: require('./lib/application_group__new.js'),
    application_group__group_id_from_package_id: require('./lib/application_group__group_id_from_package_id.js'),
    content_folder__delete: require('./lib/content_folder__delete.js'),
    content_folder__new: require('./lib/content_folder__new.js'),
    content_folder__get: require('./lib/content_folder__get.js'),
    content_folder__register_content_type: require('./lib/content_folder__register_content_type.js'),
    content_item__delete: require('./lib/content_item__delete.js'),
    content_item__new: require('./lib/content_item__new.js'),
    content_item__get: require('./lib/content_item__get.js'),
    content_item__get_content_type: require('./lib/content_item__get_content_type.js'),
    content_item__relate: require('./lib/content_item__relate.js'),
    content_revision__new: require('./lib/content_revision__new.js'),
    content_type__create_type: require('./lib/content_type__create_type.js'),

    group__delete: require('./lib/group__delete.js'),

    membership_rel__new: require('./lib/membership_rel__new.js'),

    person__new: require('./lib/person__new.js'),
    person__delete: require('./lib/person__delete.js'),
    party__delete: require('./lib/party__delete.js'),

    rel_segment__new: require('./lib/rel_segment__new.js')
  }
}; // global

module.exports = {
  _assert: require('./lib/_assert.js'),
  api: {
    acs__add_user: require('./lib/acs__add_user.js'),
    acs_group__new: require('./lib/acs_group__new.js'),
    acs_user__delete: require('./lib/acs_user__delete.js'),
    acs_object_type__create_type: require('./lib/acs_object_type__create_type.js'),

    acs_rel_type__create_type: require('./lib/acs_rel_type__create_type.js'),
    acs_rel_type__drop_type: require('./lib/acs_rel_type__drop_type.js'),

    acs_rel__new: require('./lib/acs_rel__new.js'),

    application_group__new: require('./lib/application_group__new.js'),
    application_group__group_id_from_package_id: require('./lib/application_group__group_id_from_package_id.js'),
    content_folder__delete: require('./lib/content_folder__delete.js'),
    content_folder__new: require('./lib/content_folder__new.js'),
    content_folder__get: require('./lib/content_folder__get.js'),
    content_folder__register_content_type: require('./lib/content_folder__register_content_type.js'),
    content_item__delete: require('./lib/content_item__delete.js'),
    content_item__new: require('./lib/content_item__new.js'),
    content_item__get: require('./lib/content_item__get.js'),
    content_item__get_content_type: require('./lib/content_item__get_content_type.js'),
    content_item__relate: require('./lib/content_item__relate.js'),
    content_revision__new: require('./lib/content_revision__new.js'),
    content_type__create_type: require('./lib/content_type__create_type.js'),
    content_type__register_relation_type: require('./lib/content_type__register_relation_type.js'),

    group__delete: require('./lib/group__delete.js'),

    membership_rel__new: require('./lib/membership_rel__new.js'),

    person__new: require('./lib/person__new.js'),
    person__delete: require('./lib/person__delete.js'),
    party__delete: require('./lib/party__delete.js'),

    rel_segment__new: require('./lib/rel_segment__new.js')
  }
};

//module.exports = openacs;
