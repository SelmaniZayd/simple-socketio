let io;

module.exports = {
    init: server => {
        io = require("socket.io")(server, {
            cors: {
                origin: "*",
                methods: "*"
            }
        });
        return io;
    },
    getIO: () => {
        if(!io) throw new Error("io not initialized");
        return io;
    }
};