import { Container, Spacer, Grid, Button, Text, Card } from '@nextui-org/react'

export default function Home() {
  return (
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
          <Button size='xl'>加入QQ群</Button>
        </Grid>
        <Grid>
          <Button size='xl'>加入Discord</Button>
        </Grid>
      </Grid.Container>


      <Grid.Container justify="center">
        <Grid xs={6} sm={6} md={4} lg={2}>
          <Card>
            <Card.Body>
              <Text b>民主</Text>
              <Text>我们服务器是一个民主的服务器</Text>
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={6} sm={6} md={4} lg={2}>
          <Card>
            <Card.Body>
              <Text b>自由</Text>
              <Text>玩家享有一定程度的自由</Text>
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={6} sm={6} md={4} lg={2}>
          <Card>
            <Card.Body>
              <Text b>兼容</Text>
              <Text>我们服务器为JE/BE互通服</Text>
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={6} sm={6} md={4} lg={2}>
          <Card>
            <Card.Body>
              <Text b>公正</Text>
              <Text>对于违反共同定下的规矩的人毫不手软</Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>




    </Container>
  )
}
