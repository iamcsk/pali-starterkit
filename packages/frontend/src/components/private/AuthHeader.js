import React, { useState, useCallback }  from 'react'
import { TopBar, Card, ActionList } from '@shopify/polaris';
import Auth from '../../security/Auth'


  export default function AuthHeader() 
  {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
  
    const toggleIsUserMenuOpen = useCallback(
      () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
      [],
    );
  
    const handleSearchResultsDismiss = useCallback(() => {
      setIsSearchActive(false);
      setSearchValue('');
    }, []);
  
    const handleSearchChange = useCallback((value) => {
      setSearchValue(value);
      setIsSearchActive(value.length > 0);
    }, []);
  
    const handleNavigationToggle = useCallback(() => {
      console.log('toggle navigation visibility');
    }, []);
  
   
  
    const userMenuMarkup = (
      <TopBar.UserMenu
        actions={[
          {
            items: [{content: 'My Account', onAction(){ console.log(' CSK requesting for my account')}}],
          },
          {
            items: [{content: 'Signout', onAction(){ 
              Auth.signout()
            }}],
          },
        ]}
        name="Dhoni"
        detail="Mahendra Singh"
        initials="D"
        open={isUserMenuOpen}
        onToggle={toggleIsUserMenuOpen}
      />
    );
  
    const searchResultsMarkup = (
      <Card>
        <ActionList
          items={[
            {content: 'help center'},
            {content: 'Community forums'},
          ]}
        />
      </Card>
    );
  
    const searchFieldMarkup = (
      <TopBar.SearchField
        onChange={handleSearchChange}
        value={searchValue}
        placeholder="Search"
      />
    );
  
    return (
        <TopBar
        showNavigationToggle
        userMenu={userMenuMarkup}
        searchResultsVisible={isSearchActive}
        searchField={searchFieldMarkup}
        searchResults={searchResultsMarkup}
        onSearchResultsDismiss={handleSearchResultsDismiss}
        onNavigationToggle={handleNavigationToggle}
      />
   );
}
