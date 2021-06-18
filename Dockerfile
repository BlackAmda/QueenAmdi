FROM fusuf/whatsasena:latest

RUN git clone https://github.com/BlackAmda/QueenAmdi/tree/Beta-1.5v /root/QueenAmdi/tree/Beta-1.5v
WORKDIR /root/QueenAmdi/tree/Beta-1.5v
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
