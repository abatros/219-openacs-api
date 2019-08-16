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

module.exports = content_type__create_type;


function content_type__create_type(o) {
  const {
    content_type,
    supertype,
    pretty_name,
    pretty_plural,
    //table_name,
    //id_column,
    //name_method
  } =o;

  return db.query(`
    select content_type__create_type(
      $(content_type),
      $(supertype),
      $(pretty_name),
      $(pretty_plural),
      $(table_name),
      $(id_column),
      $(name_method)
    ) as content_type;`, {
      content_type,
      supertype,
      pretty_name,
      pretty_plural,
      table_name: null,
      id_column: null,
      name_method: null
    }, {single:true})


}
