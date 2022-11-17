import styled from "styled-components";

export default function Card({ id, activity, tags, onDelete }) {
  return (
    <CardArticle>
      <h2>{activity}</h2>
      <DeleteButton type="button" onClick={() => onDelete(id)}>
        X
      </DeleteButton>
      <TagContainer>
        {tags.map((tag) => (
          <Container key={Math.random()}>{tag}</Container>
        ))}
      </TagContainer>
    </CardArticle>
  );
}

const CardArticle = styled.article`
  position: relative;
  width: 100%;
  max-width: 350px;
  max-height: 20em;
  margin-top: 20px;
  padding: 20px;
  text-align: center;
  border: 1px solid black;
  border-radius: 20px;
`;
const TagContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 15px;
`;
const DeleteButton = styled.button`
  background-color: rgb(252, 68, 68);
  font-size: x-large;
  font-weight: bolder;
  color: white;
  position: absolute;
  right: 20px;
  bottom: 20px;
  border-radius: 10px;
`;

const Container = styled.div`
  background-color: lightblue;
  padding: 10px;
  border-radius: 10px;
`;
