import ReactDOM from 'react-dom';
import React from 'react';

import { Accordion, Button, Form, Icon, Header, Container, Segment } from 'semantic-ui-react'

import css from 'semantic/semantic.less';

// import 'semantic/definitions/modules/transition';
// import 'semantic/definitions/modules/accordion';
$('.ui.accordion').accordion();

ReactDOM.render(
    <Container text>
        <Segment padded raised container>
            <Header as="h2">Dogs Roles with Humans</Header>
            <p>Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today.</p>
            <p>The dogs' value to early human hunter-gatherers led to them quickly becoming ubiquitous across world cultures. Dogs perform many roles for people, such as hunting, herding, pulling loads, protection, assisting police and military, companionship, and, more recently, aiding handicapped individuals. This impact on human society has given them the nickname "man's best friend" in the Western world. In some cultures, however, dogs are also a source of meat.</p>
            <Icon name="add to calendar" />
            <Icon name="alarm outline" />
            <Icon name="alarm mute outline" />
            <Icon name="alarm mute" />
            <Icon name="alarm" />
            <Icon name="at" />
            <Icon name="browser" />
            <Icon name="bug" />
            <Icon name="calendar outline" />
            <Icon name="calendar" />
            <Icon name="checked calendar" />
            <Icon name="cloud" />
            <Icon name="code" />
            <Icon name="comment outline" />
            <Icon name="comment" />
            <Icon name="comments outline" />
            <Icon name="comments" />
            <Icon name="copyright" />
            <Icon name="creative commons" />
            <Icon name="dashboard" />
            <Icon name="delete calendar" />
            <Icon name="external square" />
            <Icon name="external" />
            <Icon name="eyedropper" />
            <Icon name="feed" />
            <Icon name="find" />
            <Icon name="hand pointer" />
            <Icon name="hashtag" />
            <Icon name="heartbeat" />
            <Icon name="history" />
            <Icon name="home" />
            <Icon name="hourglass empty" />
            <Icon name="hourglass end" />
            <Icon name="hourglass full" />
            <Icon name="hourglass half" />
            <Icon name="hourglass start" />
            <Icon name="idea" />
            <Icon name="image" />
            <Icon name="inbox" />
            <Icon name="industry" />
            <Icon name="lab" />
            <Icon name="mail outline" />
            <Icon name="mail square" />
            <Icon name="mail" />
            <Icon name="mouse pointer" />
            <Icon name="options" />
            <Icon name="paint brush" />
            <Icon name="payment" />
            <Icon name="percent" />
            <Icon name="privacy" />
            <Icon name="protect" />
            <Icon name="registered" />
            <Icon name="remove from calendar" />
            <Icon name="search" />
            <Icon name="setting" />
            <Icon name="settings" />
            <Icon name="shop" />
            <Icon name="shopping bag" />
            <Icon name="shopping basket" />
            <Icon name="signal" />
            <Icon name="sitemap" />
            <Icon name="tag" />
            <Icon name="tags" />
            <Icon name="tasks" />
            <Icon name="terminal" />
            <Icon name="text telephone" />
            <Icon name="ticket" />
            <Icon name="trademark" />
            <Icon name="trophy" />
            <Icon name="wifi" />
            <Segment>
                <Form fluid>
                    <Form.Group widths='equal'>
                        <Form.Input label='First Name' name='first-name' placeholder='First Name' />
                        <Form.Input label='Last Name' name='last-name' placeholder='Last Name' />
                    </Form.Group>
                    <Accordion>
                        <Accordion.Title>
                            <Icon name='dropdown' /> Optional Details
                        </Accordion.Title>
                        <Accordion.Content>
                            <Form.Input label='Maiden Name' name='maiden-name' placeholder='Maiden Name' />
                        </Accordion.Content>
                    </Accordion>
                    <Button secondary type='submit'>Submit</Button>
                </Form>
            </Segment>
        </Segment>
    </Container>,
    document.getElementById('root')
);
