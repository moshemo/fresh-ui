import React from 'react'
import styled from 'styled-components'

// import firebase from 'Config'
import { editPageConfig } from 'Config'
import { MainLayout } from 'Layouts'
import { Editor } from 'Plugins'

// function useArticles() {
//   const [articles, setArticles] = useState([])

//   useEffect(() => {
//     firebase
//       .firestore()
//       .collection('articles')
//       .add({
//         title: 'This is the title',
//         author: 'Ploni Almoni',
//         content:
//           '<p>Here is some content</p><p>You see that it is written in html</p>',
//       })
//   }, [])
// }

const FroalaPage = () => {
  // const articles = useArticles()

  return (
    <MainLayout>
      <h1>Edit</h1>
      {/* <EditPageForm /> */}
      <EditorWrapper>
        <Editor tag="textarea" config={editPageConfig} />
      </EditorWrapper>
    </MainLayout>
  )
}

const EditorWrapper = styled.div`
  /* margin: 50px auto; */
  max-width: 800px;
  padding: 32px;
`

export default FroalaPage
