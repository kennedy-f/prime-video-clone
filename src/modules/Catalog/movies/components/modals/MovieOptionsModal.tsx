import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {TempMovie} from '../slider';
import {Portal} from 'react-native-portalize';

interface MovieOptionsModalProps {
  onClose: () => void;
  movie: TempMovie;
  open: boolean;
}

const {width, height} = Dimensions.get('window');

interface OptionProps {
  onPress: () => void;
  label: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  background: {
    backgroundColor: '#1e2028',
  },
  contentContainer: {
    flex: 1,
    alignContent: 'center',
    paddingTop: 32,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#3c3c3c',
  },
  optionText: {
    fontFamily: 'Poppins-Black',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const Option = ({onPress, label}: OptionProps) => {
  return (
    <Pressable onPress={onPress} style={styles.option}>
      <Text style={styles.optionText}> {label} </Text>
    </Pressable>
  );
};

export function MovieOptionsModal({
  movie,
  open,
  onClose,
}: MovieOptionsModalProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['30%', '45%'], []);
  const [index, setIndex] = useState(0);

  const handleSheetChanges = useCallback((newIndex: number) => {
    setIndex(newIndex);
  }, []);

  const handleClose = () => {
    bottomSheetRef?.current?.close();
    onClose();
  };

  return (
    <>
      {open && movie && (
        <Portal>
          <View style={styles.container}>
            <BottomSheet
              ref={bottomSheetRef}
              index={index}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
              enablePanDownToClose={true}
              onClose={handleClose}
              handleIndicatorStyle={{backgroundColor: 'white'}}
              handleStyle={{backgroundColor: '#193241'}}
              backgroundStyle={styles.background}
              backdropComponent={props => (
                <View {...props}>
                  <Pressable
                    style={{flex: 1}}
                    onPress={() => {
                      bottomSheetRef?.current?.close();
                      setIndex(-1);
                    }}>
                    <Text> aaa</Text>
                  </Pressable>
                </View>
              )}>
              <ScrollView style={styles.contentContainer}>
                <Option onPress={() => Alert.alert('teste')} label={'Watch'} />
                <Option
                  onPress={() => Alert.alert('teste')}
                  label={'Episodes and more'}
                />
                <Option
                  onPress={() => Alert.alert('teste')}
                  label={'Language and legends'}
                />
                <Option
                  onPress={() => Alert.alert('teste')}
                  label={'Credits and info'}
                />
                <Option
                  onPress={() => Alert.alert('teste')}
                  label={'Related shows'}
                />
                <Option
                  onPress={() => Alert.alert('teste')}
                  label={'Add to wathclist'}
                />
              </ScrollView>
            </BottomSheet>
          </View>
        </Portal>
      )}
    </>
  );
}
