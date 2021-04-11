from setuptools import setup
import os

VERSION = "0.1"


def get_long_description():
    with open(
        os.path.join(os.path.dirname(os.path.abspath(__file__)), "README.md"),
        encoding="utf8",
    ) as fp:
        return fp.read()


setup(
    name="datasette-parcoords",
    description="Interactive Parallel Coordinates for Datasette",
    long_description=get_long_description(),
    long_description_content_type="text/markdown",
    author="Vincent D. Warmerdam",
    url="https://github.com/koaning/datasette-parcoords",
    project_urls={
        "Issues": "https://github.com/koaning/datasette-parcoords/issues",
        "CI": "https://github.com/koaning/datasette-parcoords/actions",
        "Changelog": "https://github.com/koaning/datasette-parcoords/releases",
    },
    license="Apache License, Version 2.0",
    version=VERSION,
    packages=["datasette_parcoords"],
    entry_points={"datasette": ["parcoords = datasette_parcoords"]},
    install_requires=["datasette"],
    extras_require={"test": ["pytest", "pytest-asyncio"]},
    tests_require=["datasette-parcoords[test]"],
    package_data={
        "datasette_parcoords": ["static/*", "templates/*"]
    },
    python_requires=">=3.6",
)
