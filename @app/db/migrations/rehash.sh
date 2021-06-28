#!/bin/bash
#
# Thanks: https://gist.github.com/rcy/cc05a00138b872a2d98ee79139cd68c5
#
# usage: rehash.sh committed/*.sql
#
# This will update each file's Previous and Hash values
#

function sum {
    sha1sum | cut -d' ' -f1
}

function rehash {
    local file=$1
    local prev=$2

    if test -z $prev; then
        prevhash='-'
        hash=sha1:$(tail +4 $file | sum)
    else
        prevhash=$(head -2 $prev | tail -1 | cut -f3 -d' ')
        local tmp=$(mktemp)
        echo $prevhash > $tmp
        tail +4 $file >> $tmp
        hash=sha1:$(cat $tmp | sum)
        rm $tmp
    fi

    echo "--! Previous: $prevhash"
    echo "--! Hash: $hash"
    tail +3 $file
}

tmp=$(mktemp)

for file in $@; do
    rehash $file $prev > $tmp
    if ! diff -q $file $tmp; then
        mv $tmp $file
    fi
    prev=$file
done

rm -f $tmp
