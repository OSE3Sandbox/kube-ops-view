const PIXI = require('pixi.js')

export const ALL_LABELS = {}

export class Label {
    constructor() {
    }

    static get(name) {
        return ALL_LABELS[name] || ALL_LABELS['default']
    }
}

class DefaultLabel {
    constructor() {
        this.name = 'default'
        this.label= ''
    }
    apply(stage) {
        stage.filters = []
    }
    register() {
        ALL_LABELS[this.name] = this
    }
}
new DefaultLabel().register()

class AppLabel extends DefaultLabel {
    constructor() {
        super()
        this.name = 'App Node'
        this.label = 'role=app'
    }
}
new AppLabel().register()

class StorageLabel extends DefaultLabel {
    constructor() {
        super()
        this.name = 'Storage'
        this.label = 'role=storage'
    }
}
new StorageLabel().register()
