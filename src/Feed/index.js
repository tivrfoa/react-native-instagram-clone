import React, {Component, useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';

import {
    Avatar,
    Description,
    Header,
    Loading,
    Name,
    Post,
    PostImage} from './styles';

export default function Feed() {

    const postsPerPage = 5;

    // https://stackoverflow.com/questions/2917175/return-multiple-values-in-javascript
    const [feed, setFeed] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    async function loadPage(pageNumber = page, shouldRefresh = false) {
        if (maxPages && pageNumber > maxPages) return;

        setLoading(true);

        const response = await fetch('http://10.0.0.104:3000/feed?_expand=author&_limit=5&_page=' + pageNumber);
        const data = await response.json();
        const totalItems = await response.headers.get('X-Total-Count');

        setMaxPages(Math.ceil(totalItems / 5));
        setFeed(shouldRefresh ? data : feed.concat(data));
        setPage(pageNumber + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadPage();
    }, []);

    async function refreshList() {
        setRefreshing(true);

        await loadPage(1, true);

        setRefreshing(false);
    }

    return (
        <View>
            <FlatList
                data={feed}                
                keyExtractor={post => String(post.id)}
                onEndReached={() => loadPage()}
                onEndReachedThreshold={0.1}
                onRefresh={refreshList}
                refreshing={refreshing}
                ListFooterComponent={loading && <Loading />}
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
