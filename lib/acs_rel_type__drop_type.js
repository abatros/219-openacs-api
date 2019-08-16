const _assert = require('./_assert.js');

/*
acs_rel_roles... for what.
"admin";"#acs-kernel.Administrator#";"#acs-kernel.Administrators#"
"category";"Category";"Categories"
"component";"Component";"Components"
"composite";"Composite";"Composites"
"course_admin";"#dotlrn.course_admin_role_pretty_name#";"#dotlrn.course_admin_role_pretty_plural#"
"course_assistant";"#dotlrn.course_assistant_role_pretty_name#";"#dotlrn.course_assistant_role_pretty_plural#"
"email_image";"Email Image";"Email Images"
"instructor";"#dotlrn.instructor_role_pretty_name#";"#dotlrn.instructor_role_pretty_plural#"
"member";"#acs-kernel.member_role_pretty_name#";"#acs-kernel.member_role_pretty_plural#"
"meta_category";"Meta Category";"Meta Categories"
"party";"Party";"Parties"
"portrait";"Portrait";"Portraits"
"student";"#dotlrn.student_role_pretty_name#";"#dotlrn.student_role_pretty_plural#"
"teaching_assistant";"#dotlrn.teaching_assistant_role_pretty_name#";"#dotlrn.teaching_assistant_role_pretty_plural#"
"user";"User";"Users"
*/


module.exports = acs_rel_type__drop_type;

async function acs_rel_type__drop_type(o) {
  const {
    rel_type,             // object_type
    cascade
  } = o;

//  _assert()

  return await db.query(`
    select acs_rel_type__drop_type(
      $(rel_type),
      $(cascade)
    );`, {
    rel_type, cascade
  }, {single:true})
  .catch(err =>{
    if (err.code != 23505) throw err;
    console.log(`# alert acs_object_type__create_type err:`,err.detail)
    return null;
  })

}
