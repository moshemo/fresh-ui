import React from 'react'

import { Card, CardTitle, List, ListItem, Start, End, Text } from 'Components'
import { MainLayout } from 'Layouts'
import { colors } from 'Variables'

const ListPage = () => {
  return (
    <MainLayout>
      <Card>
        <CardTitle
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Start style={{ flexBasis: '62%' }}>
            <Text>Title</Text>
          </Start>

          <End
            style={{
              display: 'flex',
              flexBasis: '38%',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Text style={{ flexBasis: '25%', textAlign: 'center' }}>
              <span>Status</span>
            </Text>
            <Text style={{ flexBasis: '25%', textAlign: 'center' }}>
              <span>Author</span>
            </Text>
            <Text style={{ flexBasis: '25%', textAlign: 'center' }}>
              <span>Industry</span>
            </Text>
            <Text style={{ flexBasis: '25%', textAlign: 'center' }}>
              <span>Published</span>
            </Text>
          </End>
        </CardTitle>
        <List>
          <ListItem
            px={24}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Start style={{ flexBasis: '62%' }}>
              <div className="Title__Section" style={{ flexBasis: '62%' }}>
                <Text normal mb={'4px'}>
                  Here is an Article
                </Text>
                <Text
                  regular
                  truncate
                  style={{ fontSize: '13px', maxWidth: '75%' }}
                >
                  And this is a small excerpt from the article. Actually, it
                  could be quite long, but the css will truncate it at some
                  point.
                </Text>
              </div>
            </Start>
            <End
              style={{
                display: 'flex',
                flexBasis: '38%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <Text
                regular
                style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  flexBasis: '25%',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    backgroundColor: colors.secondaryLighter,
                    padding: '5px 7px',
                  }}
                >
                  Published
                </span>
              </Text>
              <Text
                regular
                style={{
                  fontSize: '13px',
                  flexBasis: '25%',
                  textAlign: 'center',
                }}
              >
                Moshe
              </Text>
              <Text
                regular
                style={{
                  fontSize: '13px',
                  flexBasis: '25%',
                  textAlign: 'center',
                }}
              >
                Robotics
              </Text>
              <Text
                regular
                style={{
                  fontSize: '13px',
                  flexBasis: '25%',
                  textAlign: 'center',
                }}
              >
                a day ago
              </Text>
            </End>
          </ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
          <ListItem>Item 4</ListItem>
        </List>
      </Card>

      {/* <Card>
        <CardTitle px={24}>
          <Flex justify="between">
            <Start>
              <Text>Title</Text>
            </Start>
            <End>
              <Flex justify="between">
                <Text>Status</Text>
                <Text>Author</Text>
                <Text>Industry</Text>
                <Text>Published</Text>
              </Flex>
            </End>
          </Flex>
        </CardTitle>
        <List>
          <ListItem>
            <Flex>
              <Start>
                <Text normal mb={'4px'}>
                  Here is an Article
                </Text>
                <Text regular truncate style={{ fontSize: '13px' }}>
                  And this is a small excerpt from the article. Actually, it
                  could be quite long, but the css will truncate it at some
                  point.
                </Text>
              </Start>
              <End />
            </Flex>
          </ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
          <ListItem>Item 4</ListItem>
        </List>
      </Card> */}
    </MainLayout>
  )
}

export default ListPage
