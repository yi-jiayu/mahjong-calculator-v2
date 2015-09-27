module['exports'] = function echoHttp(hook) {
    function createNewSession(name) {
        return {
            'name': name,
            'players': ['Player 1', 'Player 2', 'Player 3', 'Player 4'],
            'epithets': ['Player 1', 'Player 2', 'Player 3', 'Player 4'],
            'scores': [0, 0, 0, 0]
        };
    }

    console.log(hook.params);

    if (hook.params.action == 'create') {
        hook.datastore.set(hook.params.name)
    }

    hook.res.end(JSON.stringify(hook.params));
};
