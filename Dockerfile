# Verwendet das offizielle Node.js-Image als Basis
FROM node:latest

# Legt das Arbeitsverzeichnis innerhalb des Containers fest
WORKDIR /usr/src/app

# Kopiert die Abhängigkeiten und die Package.json in das Arbeitsverzeichnis
COPY package*.json ./

# Installiert die Abhängigkeiten
RUN npm install

# Kopiert den Rest des Codes in das Arbeitsverzeichnis
COPY . .

# Baut die Anwendung
RUN npm run build

# Setzt den Port für den Container fest
EXPOSE 3000

# Startet die Anwendung
CMD ["npm", "start"]
