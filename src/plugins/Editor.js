import React from 'react'

// import 'froala-editor/js/froala_editor.pkgd.min.js'
import 'froala-editor/js/plugins.pkgd.min.js'
import 'froala-editor/css/froala_style.min.css'
import 'froala-editor/css/froala_editor.pkgd.min.css'
import 'froala-editor/css/themes/dark.min.css'
// import "font-awesome/css/font-awesome.css"
import FroalaEditor from 'react-froala-wysiwyg'

export const Editor = props => <FroalaEditor {...props} />
