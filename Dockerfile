FROM fusuf/whatsasena:latest

RUN git clone https://github.com/itxammy/QueenAmdi /root/QueenAmdi
WORKDIR /root/QueenAmdi/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
