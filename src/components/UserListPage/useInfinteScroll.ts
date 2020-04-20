import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsers, pageDispatch } from '../../store/action';



const useInfiniteScroll = 
  (scrollRef: React.MutableRefObject<null>, page: number) => {

    const dispatch = useDispatch();

    useEffect(() => {
      if (page > 0) {
        dispatch(getAllUsers(page));
      }
    }, [dispatch, page]);
  
    const scrollObserver = useCallback(
      (node) => {
        new IntersectionObserver((entries) => {
          entries.forEach((en) => {
            if (en.intersectionRatio > 0) {
              dispatch(pageDispatch());
            }
          });
        }).observe(node);
      },
      [dispatch]
    );

    useEffect(() => {
      if (scrollRef.current) {
        scrollObserver(scrollRef.current);
      }
    }, [scrollObserver, scrollRef]);

  };

export default useInfiniteScroll;
