const _assert = require('./_assert.js');

/*
CREATE OR REPLACE FUNCTION public.content_revision__new(
    new__title character varying,
    new__description character varying,
    new__publish_date timestamp with time zone,
    new__mime_type character varying,
    new__nls_language character varying,
    new__text text,
    new__item_id integer,
    new__revision_id integer,
    new__creation_date timestamp with time zone,
    new__creation_user integer,
    new__creation_ip character varying,
    new__content_length integer,
    new__package_id integer)
  RETURNS integer AS
*/


module.exports = content_revision__new;

async function content_revision__new(o) { // 11 parameters
  const {
    title,
    description,
    publish_date,
    mime_type,
    nls_language,
    text,
    item_id,
    // revision_id,
    creation_date = new Date(),
    creation_user,
    creation_ip = '127.0.0.1',
    content_length = 0,
    package_id,
    verbose, data // options
  } = o;

  const revision_id = await db.query(`
    select content_revision__new(
      $(title),
      $(description),
      $(publish_date),
      $(mime_type),
      $(nls_language),
      $(text),
      $(item_id),
      $(_revision_id),
      $(creation_date),
      $(creation_user),
      $(creation_ip),
      $(content_length),
      $(package_id)) as revision_id;
    `,{
      title,
      description,
      publish_date,
      mime_type,
      nls_language,
      text,
      item_id,
      _revision_id: null,
      creation_date,
      creation_user,
      creation_ip,
      content_length,
      package_id
    }, {single:true})
  .then(({revision_id}) =>{
    //verbose &&
    console.log(`content_revision__new => ${revision_id}`)
    return revision_id;
  });

  _assert(revision_id, o, 'fatal@76')

  if (data) {
    await db.query(`
    update cr_revisions
    set data = $(data)
    where revision_id = $(revision_id);
    `,{revision_id, data})
  }

  return revision_id;
}
