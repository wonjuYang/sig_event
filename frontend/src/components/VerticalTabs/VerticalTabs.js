import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import classNames from 'classnames/bind';
import styles from './VerticalTabs.scss';


const cx = classNames.bind(styles);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 400,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabpanel: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={cx('fortabs')}>
        <div className={classes.root}>
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            TabIndicatorProps={{style: {background:'indigo'}}}
        >
            <Tab label="왠지 있어 보이고 싶을 때" {...a11yProps(0)} />
            <Tab label="뒤쳐지기 싫을 때" {...a11yProps(1)} />
            <Tab label="갑자기 떠나고 싶을 때" {...a11yProps(2)} />
            <Tab label="육아가 힘겨울  때" {...a11yProps(3)} />
            <Tab label="자랑스러운 한국인" {...a11yProps(4)} />
            <Tab label="햇반이 똑 떨어진 날 보면 좋은 책" {...a11yProps(5)} />
            <Tab label="행복한 노후를 위해" {...a11yProps(6)} />
            <Tab label="영감이 필요할 때" {...a11yProps(7)} />
            <Tab label="히어로를 만나보자" {...a11yProps(8)} />
            <Tab label="상상의 세계는 우주보다 넓다" {...a11yProps(9)} />
            <Tab label="티끌모아 태산 재테크는 지금부터" {...a11yProps(10)} />
            <Tab label="읽었다고 생각했지만, 읽지 않았던 책" {...a11yProps(11)} />
            <Tab label="취미,제대로 배워보자" {...a11yProps(12)} />
            <Tab label="힘겹게 오늘을 살아가는 모든 이들에게 희망을!" {...a11yProps(13)} />
            <Tab label="일상에서 찾는 특별한 의미" {...a11yProps(14)} />
            <Tab label="내면의 자아를 찾아서" {...a11yProps(15)} />
            <Tab label="정치 경제 필독서" {...a11yProps(16)} />
        </Tabs>
        <TabPanel  className={classes.tabpanel} value={value} index={0}>
            <div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006481/detail_SB006481.jpg" alt=""/>
                <p>대항해시대의 탄생</p>
              </div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006431/detail_SB006431.jpg" alt=""/>
                <p>예술가는왜 책을 사랑하는가</p>
              </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006481/detail_SB006481.jpg" alt=""/>
                <p>대항해시대의 탄생</p>
              </div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006431/detail_SB006431.jpg" alt=""/>
                <p>예술가는왜 책을 사랑하는가</p>
              </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006481/detail_SB006481.jpg" alt=""/>
                <p>대항해시대의 탄생</p>
              </div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006431/detail_SB006431.jpg" alt=""/>
                <p>예술가는왜 책을 사랑하는가</p>
              </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006481/detail_SB006481.jpg" alt=""/>
                <p>대항해시대의 탄생</p>
              </div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006431/detail_SB006431.jpg" alt=""/>
                <p>예술가는왜 책을 사랑하는가</p>
              </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
        <div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006481/detail_SB006481.jpg" alt=""/>
                <p>대항해시대의 탄생</p>
              </div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006431/detail_SB006431.jpg" alt=""/>
                <p>예술가는왜 책을 사랑하는가</p>
              </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={5}>
        <div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006481/detail_SB006481.jpg" alt=""/>
                <p>대항해시대의 탄생</p>
              </div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006431/detail_SB006431.jpg" alt=""/>
                <p>예술가는왜 책을 사랑하는가</p>
              </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={6}>
        <div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006481/detail_SB006481.jpg" alt=""/>
                <p>대항해시대의 탄생</p>
              </div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006431/detail_SB006431.jpg" alt=""/>
                <p>예술가는왜 책을 사랑하는가</p>
              </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={7}>
        <div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006481/detail_SB006481.jpg" alt=""/>
                <p>대항해시대의 탄생</p>
              </div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006431/detail_SB006431.jpg" alt=""/>
                <p>예술가는왜 책을 사랑하는가</p>
              </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={8}>
        <div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006481/detail_SB006481.jpg" alt=""/>
                <p>대항해시대의 탄생</p>
              </div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006431/detail_SB006431.jpg" alt=""/>
                <p>예술가는왜 책을 사랑하는가</p>
              </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={9}>
        <div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006481/detail_SB006481.jpg" alt=""/>
                <p>대항해시대의 탄생</p>
              </div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006431/detail_SB006431.jpg" alt=""/>
                <p>예술가는왜 책을 사랑하는가</p>
              </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={10}>
        <div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006481/detail_SB006481.jpg" alt=""/>
                <p>대항해시대의 탄생</p>
              </div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006431/detail_SB006431.jpg" alt=""/>
                <p>예술가는왜 책을 사랑하는가</p>
              </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={11}>
        <div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006481/detail_SB006481.jpg" alt=""/>
                <p>대항해시대의 탄생</p>
              </div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006431/detail_SB006431.jpg" alt=""/>
                <p>예술가는왜 책을 사랑하는가</p>
              </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={12}>
        <div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006481/detail_SB006481.jpg" alt=""/>
                <p>대항해시대의 탄생</p>
              </div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006431/detail_SB006431.jpg" alt=""/>
                <p>예술가는왜 책을 사랑하는가</p>
              </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={13}>
        <div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006481/detail_SB006481.jpg" alt=""/>
                <p>대항해시대의 탄생</p>
              </div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006431/detail_SB006431.jpg" alt=""/>
                <p>예술가는왜 책을 사랑하는가</p>
              </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={14}>
        <div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006481/detail_SB006481.jpg" alt=""/>
                <p>대항해시대의 탄생</p>
              </div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006431/detail_SB006431.jpg" alt=""/>
                <p>예술가는왜 책을 사랑하는가</p>
              </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={15}>
        <div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006481/detail_SB006481.jpg" alt=""/>
                <p>대항해시대의 탄생</p>
              </div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006431/detail_SB006431.jpg" alt=""/>
                <p>예술가는왜 책을 사랑하는가</p>
              </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={16}>
          <div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006481/detail_SB006481.jpg" alt=""/>
                <p>대항해시대의 탄생</p>
              </div>
              <div>
                <img src="https://www.sigongsa.com/filedata/book/SB006431/detail_SB006431.jpg" alt=""/>
                <p>예술가는왜 책을 사랑하는가</p>
              </div>
            </div>
        </TabPanel>
        </div>
    </div>
  );
}

