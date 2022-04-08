import rickypark from './rickypark.json'
import {Button, Buttonsection, Carrer, Category, Container, Infosection, Name, Photo, Skill, Skillsection, State } from './styles'

const UserCard = () => (
    <div>
        <Container>
            <Category>{rickypark.category}</Category>
            <Photo>
                <img src= {rickypark.photo}/>
            </Photo>
            <Infosection>
                <Name>{rickypark.name}</Name>
                <State>{rickypark.state}</State>
                <Carrer>{rickypark.carrer}</Carrer>
            </Infosection>
            <Buttonsection>
                <Button>Message</Button>
                <Button>Follow</Button>
            </Buttonsection>
            <Skillsection>
                <Skill>Skills</Skill>
                    {
                        rickypark.skills
                        .map(skills => 
                            <Button>{skills}</Button>)
                    }
            </Skillsection>
        </Container>
    </div>
)

export default UserCard