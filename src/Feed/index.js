import React, {Component, useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';

import {Description, Post, PostImage, Header, Avatar, Name} from './styles';

export default function Feed() {

    // https://stackoverflow.com/questions/2917175/return-multiple-values-in-javascript
    const [feed, setFeed] = useState([]);
    const [page, setPage] = useState(1);

    async function loadPage(pageNumber = 1) {
        const response = await fetch('http://10.0.0.104:3000/feed?_expand=author&_limit=5&_page=' + pageNumber);
        const data = await response.json();

        setFeed(feed.concat(data));
        setPage(pageNumber + 1);
    }

    useEffect(() => {
        loadPage(page);
    }, []);

    return (
        <View>
            <FlatList
                data={feed}                
                keyExtractor={post => String(post.id)}
                onEndReached={() => loadPage(page)}
                onEndReachedThreshold={0.1}
                renderItem={({item}) => (
                    <Post>
                        <Header>
                            <Avatar source={{uri: item.author.avatar}} />
                            <Name>{item.author.name}</Name>
                        </Header>

                        <PostImage ratio={item.aspectRatio} source={{uri: item.image}} />

                        <Description>
                            <Name>{item.author.name}</Name>   {item.description}
                        </Description>
                    </Post>
                )}
                />
        </View>
    );
}
