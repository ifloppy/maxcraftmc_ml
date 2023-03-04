import React from "react";
import { Container, Spacer, Grid, Button, Text, Card, Modal, Link } from '@nextui-org/react'
import { NextSeo } from 'next-seo';

export default function Home() {
  const [visible, setVisible] = React.useState(false);
  const joinQQGroupHandler = () => { setVisible(true); window.open('https://jq.qq.com/?_wv=1027&k=Rh5tyeB1', '_blank'); };
  const joinDiscordHandler = () => { window.open('https://discord.gg/Jr3G4P7gZ6', '_blank'); };

  const closeHandler = () => {
    setVisible(false);

  };

  return (
    <>

      <NextSeo
        description="你说得对，但是MaxCraft是由FloppyBetaStudio维护的一个高自由度的公益我的世界服务器。游戏发生在一个被称作Minecraft的幻想世界，在这里，被Notch选中的人将被授予“史蒂夫的手”，导引史蒂夫之力。你将扮演一位名为“玩家”的神秘角色，在自由的旅行中邂逅性格各异的同伴们，和他们一起击败末影龙，建立自己的家园——同时，逐步发掘“MaxCraft公开议会”的真相。 "
      />
      <Container>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $blue600 20%, $pink600 40%, $green600 60%, $red600 80%",
            textAlign: "center"
          }}
          weight="bold"
          justify="center"
        >
          MaxCraft服务器
        </Text>
        <Text style={{textAlign: 'center'}}>你说得对，但是MaxCraft是由FloppyBetaStudio维护的一个高自由度的公益我的世界服务器。<br/>游戏发生在一个被称作Minecraft的幻想世界，在这里，被Notch选中的人将被授予“史蒂夫的手”，导引史蒂夫之力。<br/>你将扮演一位名为“玩家”的神秘角色，在自由的旅行中邂逅性格各异的同伴们，和他们一起击败末影龙，建立自己的家园——同时，逐步发掘“MaxCraft公开议会”的真相。 </Text>
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
            <Card css={{ margin: "20px" }}>
              <Card.Body>
                <Text b>民主</Text>
                <Text>我们服务器是一个民主的服务器</Text>
              </Card.Body>
            </Card>
          </Grid>

          <Grid xs={12} sm={6} md={4} lg={2}>
            <Card css={{ margin: "20px" }}>
              <Card.Body>
                <Text b>自由</Text>
                <Text>玩家享有一定程度的自由</Text>
              </Card.Body>
            </Card>
          </Grid>

          <Grid xs={12} sm={6} md={4} lg={2}>
            <Card css={{ margin: "20px" }}>
              <Card.Body>
                <Text b>兼容</Text>
                <Text>我们服务器为JE/BE互通服</Text>
              </Card.Body>
            </Card>
          </Grid>

          <Grid xs={12} sm={6} md={4} lg={2}>
            <Card css={{ margin: "20px" }}>
              <Card.Body>
                <Text b>公正</Text>
                <Text>对于违规的人毫不手软</Text>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>

        <Spacer/>
        <Grid.Container justify="center">
      <Grid xs={4}>
      <Link color="secondary" onPress={()=>{window.open('https://www.123pan.com/s/AC1bVv-AyqBv.html')}} href="#">
        下载中心
      </Link>
      </Grid>
    </Grid.Container>
        

      </Container>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: '一个高自由度的Minecraft公益服务器',
    }
  }
}
