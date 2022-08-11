import ContentBox from "./ContentBox";
import { 
    Group,
    Title, 
    Text, 
    Container, 
    Image, 
    Stack, 
    Button
    } from "@mantine/core";
import Character from "../assets/character.svg"

export default function Home() {
     function handleThrowError(err: string) {
        throw new Error(err)
    }
    return (
        <Group position="center">
            <Group position="center">
                <Stack spacing="lg" sx={{maxWidth: 500}}>
                <Title>Hello. I am Edwin.</Title>
                <Text>
                    I am frontend software engineer with a passion for building
                    amazing experiences. I enjoy coffee, I love dogs, and I highly 
                    enjoy cooking! Learn more about me and my projects I've done below!
                </Text>
                </Stack>
                <ContentBox>
                    <Image src={Character} width="auto" height={200} placeholder />
                </ContentBox>
            </Group>
            <Container size="sm">
                <Text>Check back soon as this site is in progress.</Text>
            </Container>
        </Group>
    )
}