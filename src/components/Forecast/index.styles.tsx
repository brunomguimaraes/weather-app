import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const ForecastDetails = styled.div`
  margin-top: 20px;
`;

export const ForecastTitle = styled.h4`
  font-size: 24px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.textPrimary};
`;

export const ForecastItemTitle = styled.h5`
  color: ${props => props.theme.colors.textSecondary};
`;

export const ForecastList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ForecastItem = styled.li`
  display: flex; // New
  justify-content: space-between; // New
  margin-bottom: 15px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const TimeOfDayForecast = styled.div`
  width: 48%; // This makes sure there's a little gap between the two child elements.
  display: flex;
  flex-direction: column;
  align-items: center; // This centers the items horizontally.
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const ForecastText = styled.p`
  margin-bottom: 5px;
  font-size: 16px;
  color: ${props => props.theme.colors.textSecondary};
`;
