import Head from 'next/head'
import React from "react";
import { Container, Spacer, Grid, Button, Text, Card, Modal, useModal } from '@nextui-org/react'

export default function Home() {
  const [visible, setVisible] = React.useState(false);
  const joinQQGroupHandler = () => {setVisible(true);window.open('https://jq.qq.com/?_wv=1027&k=Rh5tyeB1', '_blank');};
  const joinDiscordHandler = () => {window.open('https://discord.gg/Jr3G4P7gZ6', '_blank');};

  const closeHandler = () => {
    setVisible(false);
    
  };

  return (
    <>
    <Head>
      <title>MaxCraftMC</title>
    </Head>
    <Container>
      <Grid.Container gap={-1} justify="center">
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
        >
          Max
        </Text>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $pink600 -20%, $green600 100%",
          }}
          weight="bold"
        >
          Craft
        </Text>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $green600 -20%, $red600 100%",
          }}
          weight="bold"
        >
          服务器
        </Text>



      </Grid.Container>
      <Spacer y={1}></Spacer>
      <Grid.Container gap={2} justify="center">
        <Grid>
          <Button size='xl' auto shadow onPress={joinQQGroupHandler}>加入QQ群</Button>
        </Grid>
        <Grid>
          <Button size='xl' auto shadow onPress={joinDiscordHandler}>加入Discord</Button>
        </Grid>
      </Grid.Container>


      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
        <Text id="modal-title" size={18}>
            加入QQ群
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">
            若无法通过链接加入QQ群，请复制群号并搜索加群：953762913
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto onPress={() => setVisible(false)}>
            确认
          </Button>
        </Modal.Footer>
      </Modal>



      <Grid.Container justify="center">
        <Grid xs={12} sm={6} md={4} lg={2}>
          <Card>
            <Card.Body>
              <Text b>民主</Text>
              <Text>我们服务器是一个民主的服务器</Text>
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={6} md={4} lg={2}>
          <Card>
            <Card.Body>
              <Text b>自由</Text>
              <Text>玩家享有一定程度的自由</Text>
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={6} md={4} lg={2}>
          <Card>
            <Card.Body>
              <Text b>兼容</Text>
              <Text>我们服务器为JE/BE互通服</Text>
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={6} md={4} lg={2}>
          <Card>
            <Card.Body>
              <Text b>公正</Text>
              <Text>对于违反共同定下的规矩的人毫不手软</Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>




    </Container>
    </>
  )
}
