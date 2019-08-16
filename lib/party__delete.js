const _assert = require('./_assert.js');

module.exports = async (party_id) =>{
  await db.query(`delete from parties where party_id = $(party_id)`,{party_id},{single:true});
  await db.query(`delete from acs_objects where object_id = $(party_id)`,{party_id},{single:true});
}
