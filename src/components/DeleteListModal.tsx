import React, { FC, useEffect } from 'react';

interface DeleteListModalProps{
  listId: string;
}

const DeleteListModal: FC<DeleteListModalProps> = ({listId}) => {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card"></div>
    </div>
  );
}