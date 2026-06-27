interface Trade {
  fromChat: string;
  requesterId: string;
  receiverId: string;
  stickerCode: string;
}

const trades: Record<string, Trade> = {};

export default trades;