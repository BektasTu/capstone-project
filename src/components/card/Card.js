import styled from "styled-components";
import { BsTrashFill } from "react-icons/bs";

export default function Card({ id, activity, tags, onDelete }) {
  return (
    <CardArticle>
      <DeleteButton
        type="button"
        aria-label="delete"
        onClick={() => onDelete(id)}
      >
        X
      </DeleteButton>
      <h2>{activity}</h2>
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
  background-color: black;
`;
const TagContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 15px;
`;
const DeleteButton = styled(BsTrashFill)`
  background-color: red;
  font-size: 1.5rem;
  font-weight: bolder;
  color: white;
  position: absolute;
  padding: 2px;
  right: 20px;
  top: 20px;
  border-radius: 5px;
`;

const Container = styled.div`
  background-color: lightblue;
  padding: 10px;
  border-radius: 10px;
`;
