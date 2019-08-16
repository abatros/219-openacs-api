const _assert = require('./_assert.js');

/*
CREATE OR REPLACE FUNCTION public.content_type__create_type(
    create_type__content_type character varying,
    create_type__supertype character varying,
    create_type__pretty_name character varying,
    create_type__pretty_plural character varying,
    create_type__table_name character varying,
    create_type__id_column character varying,
    create_type__name_method character varying)
  RETURNS integer AS
*/

module.exports = content_type__register_relation_type;


function content_type__register_relation_type(o) {
  const {
    content_type,
    target_type,
    relation_tag,
    min_n, max_n
  } =o;

  return db.query(`
    select content_type__register_relation_type(
      $(content_type),
      $(target_type),
      $(relation_tag),
      $(min_n), $(max_n));
  `, {
      content_type,
      target_type,
      relation_tag,
      min_n, max_n
  }, {single:true})

}
