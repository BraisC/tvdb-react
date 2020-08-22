import React, { useContext, useState } from 'react';
import Loader from 'components/Loader';
import { ConfigContext } from 'contexts/configContext';
import { profile } from 'images';
import utils from 'utils';
import { Styled } from './styled';

const PeopleInfo = ({ people, isLoading }) => {
  const config = useContext(ConfigContext);
  const [profileLoaded, setProfileLoaded] = useState(false);

  const handleProfileLoad = () => {
    setProfileLoaded(true);
  };

  console.log(people);

  return isLoading ? (
    'Loading'
  ) : (
    <Styled.PeopleInfo>
      <Styled.Profile>
        {!profileLoaded && (
          <Styled.ProfileLoader>
            <Loader />
          </Styled.ProfileLoader>
        )}

        <Styled.ProfileImage
          style={{ opacity: profileLoaded ? '1' : '0' }}
          src={
            people.profile_path
              ? `${config?.url}${config?.profile.big}${people.profile_path}`
              : profile
          }
          alt={people.name}
          onLoad={handleProfileLoad}
        />
      </Styled.Profile>
      <Styled.Data>
        <Styled.DataHeader>
          <h1>{utils.limitTextLength(people.name, 20)}</h1>
          <p>
            {people.birthday} / {people.place_of_birth}
          </p>
        </Styled.DataHeader>
        <Styled.DataSection>
          <h2>Biography</h2>
          <p>{people.biography || 'No biography'}</p>
        </Styled.DataSection>
      </Styled.Data>
    </Styled.PeopleInfo>
  );
};

export default PeopleInfo;
