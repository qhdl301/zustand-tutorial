import { FC } from "react";
import { TextBox, Typograph, Button } from "../components";
import { useGuestBookStore } from "../store";

const GuestBookContainer: FC = () => {
  const { guestBookEntry, guestBookList, setGuestBookEntry, addGuestBookEntry } = useGuestBookStore();

  const handleGuestBookChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuestBookEntry(event.target.value);
  };

  const handleDeleteEntry = (index: number) => {
    const updatedList = guestBookList.filter((_, i) => i !== index);
    useGuestBookStore.setState({ guestBookList: updatedList });
  };

  return (
    <div className="container">
      <Typograph variant="h2">Guest Book</Typograph>
      <TextBox value={guestBookEntry} placeholder="방명록 적어주세요" onChange={handleGuestBookChange} />
      <Button onClick={addGuestBookEntry} disabled={!guestBookEntry.trim()}>
        등록
      </Button>
      {guestBookList.length > 0 && (
        <div className="entry-list">
          <Typograph variant="h3">방명록</Typograph>
          <ul>
            {guestBookList.map((entry, index) => (
              <li key={index}>
                {entry}
                <Button onClick={() => handleDeleteEntry(index)}>삭제</Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GuestBookContainer;
