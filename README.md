# hash-test

Run like:


```
node index.js  ../ssb-db2/ssb/db2/indexes/value_author.32prefix  ../ssb-db2/ssb/db2/indexes/timestamp.index ../ssb-db2/ssb/db2/indexes/value_content_type_post.index 
```

=> 

```
[
  '../ssb-db2/ssb/db2/indexes/value_author.32prefix',
  '../ssb-db2/ssb/db2/indexes/timestamp.index',
  '../ssb-db2/ssb/db2/indexes/value_content_type_post.index'
]
filename ../ssb-db2/ssb/db2/indexes/value_author.32prefix
length 6313114
hash: 9.293ms
hash 712780ce
filename ../ssb-db2/ssb/db2/indexes/timestamp.index
length 12626212
hash: 14.602ms
hash 91682f4c
filename ../ssb-db2/ssb/db2/indexes/value_content_type_post.index
length 179368
hash: 0.304ms
hash 493e80c8
done
```

Numbers on android:

```
[
 './value_author.32prefix',
 './timestamp.index',
 './value_content_type_post.index'
]
filename ./value_author.32prefix
length 4647144
hash: 58.443ms
hash 1777b9f4
filename ./timestamp.index
length 9293968
hash: 37.506ms
hash 16bccd6f
filename ./value_content_type_post.index
length 132280
hash: 0.625ms
hash bec811f9
```
