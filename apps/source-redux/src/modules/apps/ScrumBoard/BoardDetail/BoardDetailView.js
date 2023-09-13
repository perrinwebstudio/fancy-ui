import React, { useEffect, useState } from 'react';
import AddCard from './List/AddCard';
import AppsContent from '@crema/components/AppsContent';
import Board from 'react-trello';
import PropTypes from 'prop-types';
import { useThemeContext } from '@crema/context/ThemeContextProvider';
import {
  AddCardButton,
  AddNewList,
  BoardCard,
  ListHeader,
  NewListButton,
} from '@crema/modules/apps/ScrumBoard';
import { useDispatch } from 'react-redux';
import {
  onAddNewList,
  onDeleteSelectedList,
  onEditBoardList,
  onUpdateCardCategory,
} from '../../../../redux/actions';

const BoardDetailView = (props) => {
  const dispatch = useDispatch();
  const [list, setList] = useState(null);
  const { theme } = useThemeContext();
  const [isAddCardOpen, setAddCardOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);
  const { boardDetail } = props;

  const getBoardData = () => {
    return {
      ...boardDetail,
      lanes: boardDetail.list,
    };
  };

  const [boardData, setBoardData] = useState(getBoardData());

  useEffect(() => {
    setBoardData(getBoardData());
  }, [boardDetail]);

  const shouldReceiveNewData = (nextData) => {
    setBoardData(nextData);
  };

  const onCloseAddCard = () => {
    setAddCardOpen(false);
  };

  const onClickAddCard = (listId) => {
    setList(boardData.lanes.find((item) => item.id === listId));
    setSelectedCard(null);
    setAddCardOpen(true);
  };

  const onAddList = (name) => {
    dispatch(onAddNewList(boardDetail.id, { name }));
  };

  const getCardById = (lane, cardId) =>
    lane.cards.find((item) => item.id === cardId);

  const onEditCardDetail = (cardId) => {
    const selectedList = boardData.lanes.find((item) => {
      const correctCard = item.cards.find((card) => card.id === cardId);
      if (correctCard) return item;
    });
    const selectedCard = getCardById(selectedList, cardId);
    setSelectedCard(selectedCard);
    setList(selectedList);
    setAddCardOpen(true);
  };

  const handleDragCard = (
    cardId,
    sourceLaneId,
    targetLaneId,
    position,
    cardDetails,
  ) => {
    if (sourceLaneId !== targetLaneId) {
      const boardId = boardDetail?.id;
      dispatch(
        onUpdateCardCategory(
          cardDetails.id,
          sourceLaneId,
          targetLaneId,
          position,
          boardId,
        ),
      );
    }
  };

  return (
    <AppsContent fullView>
      <Board
        laneStyle={{
          backgroundColor: theme.palette.background.default,
        }}
        editable
        canAddLanes
        data={boardData}
        onDataChange={shouldReceiveNewData}
        handleDragEnd={handleDragCard}
        onCardAdd={(card, laneId) => {
          onClickAddCard(laneId);
        }}
        onCardClick={(cardId, metadata, laneId) => {
          onEditCardDetail(cardId, laneId);
        }}
        onLaneAdd={(name) => onAddList(name)}
        onLaneUpdate={(laneId, data) => {
          const lane = boardData.lanes.find((item) => item.id === laneId);
          dispatch(
            onEditBoardList(boardDetail.id, { ...lane, name: data.title }),
          );
        }}
        onLaneDelete={(laneId) =>
          dispatch(onDeleteSelectedList(boardDetail.id, laneId))
        }
        t={(listId) => onClickAddCard(listId)}
        components={{
          Card: BoardCard,
          LaneHeader: ListHeader,
          AddCardLink: AddCardButton,
          NewCardForm: AddCard,
          NewLaneForm: AddNewList,
          NewLaneSection: NewListButton,
        }}
      />
      {isAddCardOpen ? (
        <AddCard
          isModalVisible={isAddCardOpen}
          handleCancel={onCloseAddCard}
          list={list}
          board={boardDetail}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      ) : null}
    </AppsContent>
  );
};

export default BoardDetailView;

BoardDetailView.propTypes = {
  boardDetail: PropTypes.object,
  setData: PropTypes.func,
};
