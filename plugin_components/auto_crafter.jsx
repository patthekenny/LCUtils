'use babel';

import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Controls extends React.Component {
    constructor(props) {
        super(props);
    }

    _craftKeysAndOpenChests() {
        
    }

    render() {
        return ( 
            <div>
                <Button bsStyle="primary" onClick={this.props.plugin.craftKeysAndOpenChests}>
                    Open Chests
                </Button>
                <br />
                <Button bsStyle="primary" onClick={this.props.plugin.disenchantChampShards}>
                    Disenchant Champion Shards
                </Button>
            </div>
        )
    }
}

Controls.propTypes = {
    plugin: PropTypes.object
}

export default Controls;