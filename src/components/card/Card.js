import styled from "styled-components";
import { BsTrashFill } from "react-icons/bs";

export default function Card({ id, activity, tags, onDelete }) {
  return (
    <CardArticle>
      <DeleteButton
        type="button"
        aria-label="delete"
        onClick={() => onDelete(id)}
      />

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
  background-color: #334155;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  top: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 25px red;
`;

const Container = styled.div`
  background-color: lightblue;
  padding: 10px;
  border-radius: 10px;
`;
