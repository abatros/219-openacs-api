const _assert = require('./_assert.js');


module.exports = content_item__delete;

async function content_item__delete(o) {
  let {
    item_id,
    verbose
  } = o;

  if (Number.isInteger(o)) {
    item_id = o;
  }


  _assert(item_id, o, 'Missing item_id');

  return await db.query(`
    select content_item__delete($(item_id));
    `,{item_id}, {single:true})
  .catch(err =>{
    if (verbose) {
      console.log(`content_item__delete =>error code:${err.code} => ${err.detail}`);
      if (!err.detail) console.log(err)
    }
    throw err;
  });

}
