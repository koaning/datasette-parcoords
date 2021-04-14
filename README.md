# datasette-parcoords

> **WARNING** This repo is "just hobbying around" and "work in progress". 

Interactive Parallel Coordinates for Datasette

## Installation

Install this plugin in the same environment as Datasette.

    $ datasette install datasette-parcoords

## Usage

Usage instructions go here.

## Development

To set up this plugin locally, first checkout the code. Then create a new virtual environment:

    cd datasette-parcoords
    python3 -mvenv venv
    source venv/bin/activate

Or if you are using `pipenv`:

    pipenv shell

Now install the dependencies and tests:

    pip install -e '.[test]'

To run the tests:

    pytest
