FROM fusuf/whatsasena:latest

RUN git clone https://github.com/creativezz/LIZA-MWOL /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/creativezz/media

CMD ["node", "bot.js"]
