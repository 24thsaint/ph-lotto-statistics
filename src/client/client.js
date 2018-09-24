/* global window */

import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';

const socket = io(window.location.host);
const client = feathers();
client.configure(socketio(socket));

window.app = client;

export default client;