# EduMeet - IoRestoACasa.work #

Questo repository permette di installare velocemente una nuova istanza di EduMeet ma con il branding iorestoacasa ed eventuali nostre modifiche:

<https://github.com/edumeet/edumeet>

## 0. Entra nella chat Telegram di supporto ##

Se hai bisogno di una mano durante l'installazione non esitare a scrive su:

<https://t.me/iorestoacasawork>

Sicuramente qualcuno ti saprà dare una mano!

## 2. Procurati un server ##

### 2.0 Requisiti minimi ###

Per garantire un servizio migliore abbiamo stabilito i seguenti requisiti minimi:

* Macchina dedicata allo scopo, non condivisa con altri servizi.
* IPv4 statico (possibilmente in un datacenter italiano)
* Connessione 100 Mbps simmetrica (meglio 1 Gbps, ogni utente occupa circa 4 Mbps)
* CPU con almeno 4 core (server grade - Xeon o analogo)
* Almeno 4GB di RAM

Server posizionati in datacenter italiani riducono latenza e congestione di rete.

Naturalmente un server più grande riuscirà ad ospitare più utenti!

### 2.1 Sistema operativo ###

Puoi usare qualsiasi distribuzione GNU/Linux, avrai bisogno di installare solo `docker`, `docker-compose` e `git`.

### 2.2 Installare Docker ###

Per installare Docker, ti consiglio di seguire la guida ufficiale:

<https://docs.docker.com/install/>

Per installare Docker Compose, allo stesso modo, attieniti alla guida ufficiale:

<https://docs.docker.com/compose/install/>

## 3. Ottieni un certificato SSL ##

EduMeet funziona solamente in HTTPS, quindi dovrai ottenere un certificato SSL valido.

Puoi utilizzare [Let's Encrypt](https://letsencrypt.org) che fornisce certificati gratuiti o un una certification authority a tua scelta.

## 3.1 Let's encrypt ###

Se vuoi usare `Let's encrypt` dovrai usare il comando `certbot`:

```bash
# apt install certbot
# certbot certonly -d <TUO_DOMINO> --standalone
```

assicurati che il tuo dominio risolva correttamente all'indirizzo IP del tuo server prima di lanciare questo comando, altrimenti la generazione del certificato fallirà.

Se la procedura ha successo troverai i file necessari in:

```text
/etc/letsencrypt/live/<TUO_DOMINIO>/fullchain.pem  <-- Certificato (pubblico)
/etc/letsencrypt/live/<TUO_DOMINIO>/privkey.pem    <-- Chiave private
```

Nota per i certicati `Let's Encrypt`:
Ogni 3 mesi l'amministratore del server deve preocuparsi di aggiornare il certificato.

## 4. Scarica EduMeet ##

```bash
# cd /opt
# git clone https://github.com/iorestoacasa-work/docker-edumeet.git
# cd docker-edumeet
```

## 5. Copia il certificato SSL ##

```bash
# cp /etc/letsencrypt/live/<TUO_DOMINO>/fullchain.pem certs/
# cp /etc/letsencrypt/live/<TUO_DOMINO>/privkey.pem certs/
```

## 6. Modifica i file di configurazione ##

In questo repository trovi dei file di configurazione di esempio. Dovrai copiarli e modificare tutti i `CHANGEME` che trovi nei valori adatti al tuo server.

```bash
# cp configs/coturn/coturn.example.conf configs/coturn/coturn.conf
# cp configs/redis/redis.example.conf configs/redis/redis.conf
# cp configs/app/config.example.js configs/app/config.js
# cp configs/server/config.example.js configs/server/config.js
```

Una volta copiati e modificati i file puoi usare il comando:

```bash
# grep -r CHANGEME configs/coturn/coturn.conf configs/redis/redis.conf configs/app/config.js configs/server/config.js
```

per verificare se è tutto apposto. Se il comando non da nessun output allora hai fatto tutto bene!

## 7. Avvia i container ##

Per lanciare EduMeet usa:

```bash
# docker-compose up -d
```

## 8. Non dimenticare il Firewall ##

Queste sono le porte che EduMeet utilizza. Controlla le impostazioni del tuo Firewall in caso di problemi.

* 80 e 443 TCP per WEB
* 3478 TCP per TURN
* 8081 TCP per le metriche
* da 40000 a 49999 UDP/TCP per i media

## 9. Verifica che tutto stia funzionando corretamente ##

Collegati con il browser all'hostname scelto e facendo una videochiamata (apri due schede ed entra nella stessa stanza).

## 10. Verifica che le metriche siano esposte correttamente ##

Verifica che le metriche stiano funzionando con:

```bash
# curl http://hostname.scelto.it:8081/metrics
```

## 11. Apri una issue con le informazioni del server ##

Crea una issue partendo [da questo template](https://github.com/iorestoacasa-work/iorestoacasa.work/issues/new?assignees=Radeox%2C+tapionx&labels=new+server&template=aggiunta-nuovo-server.md&title=%5BNEW+SERVER%5D). Aggiungeremo il tuo server il prima possibile alla tabella sul sito <https://iorestoacasa.work>.
